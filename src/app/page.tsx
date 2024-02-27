"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Collection from "@/components/Collection";
import Product from "@/components/Product";
import FlowPayment from "@/components/FlowPayment";
import Deal from "@/components/Deal";
import Footer from "@/components/Footer";
import ReduxProvider from "@/store/ReduxProvider";

export default function HomePage() {
  return (
    <>
      <ReduxProvider>
        <Navbar />
        <Banner></Banner>
        <Collection></Collection>
        <Product></Product>
        <FlowPayment></FlowPayment>
        <Deal></Deal>
        <Footer></Footer>
      </ReduxProvider>
    </>
  );
}
