import { useState } from "react";
import "./App.css";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AIFeatures from "./components/home/AIFeatures";
import AIEngines from "./components/home/AIEngines";
import PricingPlan from "./components/home/PricingPlan";
import FavoriteApp from "./components/home/FavoriteApp";

function App() {
  return (
    <>
      <main className="w-full">
        <HeroSection /> {/* ← pehle */}
        <AIFeatures />
        <AIEngines />
        <FavoriteApp />
        <PricingPlan />
      </main>
    </>
  );
}

export default App;
