import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PageContainer } from "@/design/layout";
import { NavBar } from "@/components/navigation/navBar";
import { Drawer } from "@/components/elements/drawer";
import { FormTypes } from "@/types";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Drawer formType={FormTypes.ADD_VIDEO} />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  );
}
