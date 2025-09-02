import React from "react";
import Head from "next/head";
import Navbar from "@/component/client/layout/Navbar";
import Footer from "@/component/client/layout/Footer";
import HeroSection from "@/component/client/home/HeroSection";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>LMS – Learn Anytime, Anywhere</title>
        <meta
          name="description"
          content="A modern Learning Management System (LMS) built with Next.js."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};

export default IndexPage;
