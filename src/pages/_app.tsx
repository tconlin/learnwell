import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PageContainer } from "@/design/layout";
import { NavBar } from "@/components/navigation/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  );
}
