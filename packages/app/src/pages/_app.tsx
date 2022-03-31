import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, FunctionComponent, useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { store, persistor } from "../state/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const HooksProvider = dynamic(
  () => import("../state/application/HooksProvider"),
  { ssr: false }
);
function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent;
    Layout: FunctionComponent;
    Provider: FunctionComponent;
  };
}) {
  const { pathname, query, locale } = useRouter();

  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || Fragment;

  // Allows for conditionally setting a layout to be hoisted per page

  // Allows for conditionally setting a guard to be hoisted per page
  const Guard = Component.Guard || Fragment;

  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate
          loading={
            <div
              className="absolute flex items-center justify-center"
              style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            >
              <div className=""></div>
            </div>
          }
          persistor={persistor}
        >
          <></>
          <HooksProvider>
            <Guard>
              <Component {...pageProps} />
              <ToastContainer />
            </Guard>
          </HooksProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default App;
