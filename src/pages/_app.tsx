import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { initializeStore, IStore } from "@/pages/rootStore";
import "./globals.css";
import { observer } from "mobx-react";

export type AppOwnProps = { store: IStore };
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function RootApp({ Component, pageProps, store }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);
  return getLayout(<Component {...pageProps} store={store} />);
}

RootApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const store = initializeStore();
  const ctx = await App.getInitialProps(context);
  await store.fetchBrands();
  return { ...ctx, store };
};

export default observer(RootApp);
