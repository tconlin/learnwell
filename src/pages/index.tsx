"use client";

import { PageContainer } from "@/design/layout";
import { NavBar } from "@/components/navigation/navBar";
import { Feed } from "@/components/feed";

function Home() {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Feed />
      </PageContainer>
    </>
  );
}

export default Home;
