import React from "react";
import Navbar from "@/components/pelucias/Navbar";
import Hero from "@/components/pelucias/Hero";
import SpecsRibbon from "@/components/pelucias/SpecsRibbon";
import Portfolio from "@/components/pelucias/Portfolio";
import Process from "@/components/pelucias/Process";
import Differentials from "@/components/pelucias/Differentials";
import InquiryForm from "@/components/pelucias/InquiryForm";
import Footer from "@/components/pelucias/Footer";
import WhatsAppFloat from "@/components/pelucias/WhatsAppFloat";

export default function Home() {
  return (
    <div id="top" className="bg-[#FDFDFD]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SpecsRibbon />
        <Portfolio />
        <Process />
        <Differentials />
        <InquiryForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}