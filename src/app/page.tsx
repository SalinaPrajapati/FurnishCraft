"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Collection from "@/components/Collection";
import Product from "@/components/Product";
import ReduxProvider from "@/store/ReduxProvider";

export default function HomePage() {
  return (
    <>
      <ReduxProvider>
        {/* <Navbar />
        <Banner></Banner>
        <Collection></Collection> */}
        <Product></Product>
      </ReduxProvider>
    </>
  );
}
