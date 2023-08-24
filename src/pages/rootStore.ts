import {
  applySnapshot,
  flow,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
} from "mobx-state-tree";
import hexToRGB from "hex-rgb";
import { useMemo } from "react";

let store: IStore | undefined;

export type BrandType = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  accentColor: string;
  bankName: string;
  logo: string;
};

export type ThemeResponse = {
  [key: string]: BrandType;
};

export type BrandsType = ThemeResponse;

const Brand = types.model({
  primaryColor: types.optional(types.string, ""),
  secondaryColor: types.optional(types.string, ""),
  tertiaryColor: types.optional(types.string, ""),
  accentColor: types.optional(types.string, ""),
  bankName: types.optional(types.string, ""),
  logo: types.optional(types.string, ""),
});

interface Color {
  red: number;
  green: number;
  blue: number;
}

const defaultColors: Partial<BrandType> = {
  primaryColor: "#BBB",
  secondaryColor: "#FF0",
  tertiaryColor: "#F4F4F4",
  accentColor: "#BBB",
};

const colorProps: Array<keyof typeof defaultColors> = [
  "primaryColor",
  "secondaryColor",
  "tertiaryColor",
  "accentColor",
];

const Store = types
  .model({
    brands: types.optional(types.map(Brand), {}),
    isLoading: types.optional(types.boolean, false),
    error: types.optional(types.string, ""),
    currentBrand: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setCurrentBrand: (brandName: string) => {
      self.currentBrand = brandName;
    },
    fetchBrands: flow(function* () {
      try {
        self.isLoading = true;
        self.error = "";

        const response = yield fetch(
          "https://thingproxy.freeboard.io/fetch/https://muoh13m7lj.execute-api.us-east-1.amazonaws.com/default/fimvp-whitelabel",
          {
            next: { revalidate: 60 },
          }
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const themeData: ThemeResponse = yield response.json();

        Object.keys(themeData).forEach((bankName) => {
          const brandData = themeData[bankName];
          const brandColors: Partial<
            Record<(typeof colorProps)[number], string>
          > = {};

          colorProps.forEach((prop) => {
            const hexColor = brandData[prop] || defaultColors[prop] || "";
            const rgbColor = hexToRGB(hexColor);
            brandColors[
              prop
            ] = `${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}`;
          });
          const brandModel = {
            ...(brandData as any),
            ...brandColors,
          };
          self.brands.set(bankName, brandModel);
        });
        self.currentBrand = "ecu";
        self.isLoading = false;
        return self.brands;
      } catch (error) {
        self.isLoading = false;
        self.error = "Error fetching data";
        console.error("Error fetching data:", error);
        return self.brands;
      }
    }),
  }));

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({});
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return store;
}

export function useStore(initialState = null): IStore {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
