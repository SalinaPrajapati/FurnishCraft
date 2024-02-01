"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Collection from "@/components/Collection";
import ReduxProvider from "@/store/ReduxProvider";

export default function HomePage() {
  return (
    <>
      <ReduxProvider>
      <Navbar />
    </ReduxProvider>
      <Banner></Banner>
      <Collection></Collection>
    </>
  );
}
