import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import { useStore } from "@/pages/rootStore";
import "./globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function App({ Component, pageProps }: AppPropsWithLayout) {
  const store = useStore(pageProps.initialState);
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} store={store} />);
}

export default App;
