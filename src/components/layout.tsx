import React, { useMemo } from "react";
import { Inter } from "next/font/google";
import SvgLogoEvergladesCreditUnion from "@/svgs/logo-everglades-credit-union.svg";
import SvgIconHamburger from "@/svgs/icon-hamburger.svg";
import { IStore, useStore } from "@/pages/rootStore";
import { observer } from "mobx-react-lite";

const inter = Inter({ subsets: ["latin"] });

type Option = string;

export const Dropdown = observer(
  ({ store }: { store: IStore }): React.ReactNode => {
    const options: Option[] = Array.from(store.brands.keys());
    const [selectedOption, setSelectedOption] = React.useState<Option | null>(
      store.currentBrand
    );

    const handleOptionChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const selectedValue = event.target.value as Option;
      setSelectedOption(selectedValue);
    };

    const doSomethingWithSelectedOption = React.useCallback(
      (option: Option) => {
        if (store.brands.get(option)) {
          const primaryColor = store.brands.get(option)?.primaryColor;
          const secondaryColor = store.brands.get(option)?.secondaryColor;
          const tertiaryColor = store.brands.get(option)?.tertiaryColor;
          const accentColor = store.brands.get(option)?.accentColor;

          primaryColor &&
            globalThis.document.documentElement.style?.setProperty(
              "--color-primary",
              primaryColor
            );
          secondaryColor &&
            globalThis.document.documentElement.style?.setProperty(
              "--color-secondary",
              secondaryColor
            );
          tertiaryColor &&
            globalThis.document.documentElement.style?.setProperty(
              "--color-tertiary",
              tertiaryColor
            );
          accentColor &&
            globalThis.document.documentElement.style?.setProperty(
              "--color-accent",
              accentColor
            );
        } else {
        }
      },
      [store]
    );

    React.useEffect(() => {
      if (selectedOption !== null) {
        doSomethingWithSelectedOption(selectedOption);
        store.setCurrentBrand(selectedOption);
      }
    }, [selectedOption, doSomethingWithSelectedOption, store]);

    return (
      <div className="bg-white font-normal text-sm opacity-80">
        <label htmlFor="dropdown">Theme: </label>
        <select id="dropdown" onChange={handleOptionChange} defaultValue="ecu">
          <option>-- select --</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

function Layout({ children }: { children: React.ReactNode }) {
  const store = useStore();
  const memoizedDropdown = useMemo(() => <Dropdown store={store} />, [store]);

  React.useEffect(() => {
    store.fetchBrands();
  }, [store]);

  const currentBrand = store.currentBrand;
  const brandLogo = store.brands?.get(currentBrand)?.logo;

  return (
    !store.isLoading && (
      <div className={`level-layout ${inter.className}`}>
        <header className="sticky top-0 z-10 h-[86px] bg-primary">
          <div className="grid grid-flow-col grid-cols-[1fr] md:grid-cols-[1fr] align-center h-[86px] px-[17px] items-center">
            {brandLogo ? (
              <div
                dangerouslySetInnerHTML={{ __html: brandLogo }}
                className="w-auto h-min-[32px]"
              />
            ) : (
              <SvgLogoEvergladesCreditUnion />
            )}
            <SvgIconHamburger className="w-[44px] h-[32px] md:hidden" />
          </div>
          {memoizedDropdown}
        </header>
        {children}
      </div>
    )
  );
}

export default observer(Layout);
