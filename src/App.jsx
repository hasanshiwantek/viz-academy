import { useState } from "react";
import "./App.css";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AIFeatures from "./components/home/AIFeatures";
 
function App() {
  return (
    <>
    <main className="w-full">
      <HeroSection />   {/* ← pehle */}
      <AIFeatures/>
    </main>
    </>
  );
}
 
export default App;