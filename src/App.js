import React from "react";
import Footer from "./Footer";
import Flowers from "./Flowers";
import FlowerSection from "./FlowerSection"; 
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Flowers />
        <FlowerSection />
       <Footer />
      </div>
    </div>
  );
}


 