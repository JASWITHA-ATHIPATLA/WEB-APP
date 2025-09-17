import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HistorySection from "../components/HistorySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* History Section */}
      <HistorySection />
      {/* Hero Section */}
      <Hero />



      {/* Footer */}
      <Footer />
    </>
  );
}
