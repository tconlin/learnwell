import { Html, Head, Main, NextScript } from "next/document";
import { PageContainer } from "@/design/layout";
import { NavBar } from "@/components/navigation/navBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <PageContainer>
          <Main />
        </PageContainer>
        <NextScript />
      </body>
    </Html>
  );
}
