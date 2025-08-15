"use client";
import Footer from "./footer";
import LifeQuotes from "./quotes";

export default function Home() {
  return (
    <div className="h-screen bg-white text-black text-center">
      <LifeQuotes />
      <Footer />
    </div>
  );
}
