import React from "react";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Blog,
  Header,
  Footer,
  Features,
  Possibility,
  WhatGPT,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
