import { useState } from "react";
import "./App.css";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AIFeatures from "./components/home/AIFeatures";
import AIEngines from "./components/home/AIEngines";
import PricingPlan from "./components/home/PricingPlan";
import FavoriteApp from "./components/home/FavoriteApp";
import HappyUsers from "./components/home/HappyUsers";
import GetStarted from "./components/home/GetStarted";
import ModelCarousel from "./components/home/ModelCarousel";
import ArrowCard from "./components/home/ArrowCard";
import FAQ from "./components/home/FAQ";
import Workflow from "./components/home/Workflow";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <main className="w-full ">
        <HeroSection /> {/* ← pehle */}
        <AIFeatures />
        <AIEngines />
        <FavoriteApp />
        <GetStarted />
        <ModelCarousel />
        <ArrowCard />
        <PricingPlan />
        <HappyUsers />
        <FAQ/>
        <Workflow />
        <Footer />
      </main>
    </>
  );
}

export default App;
