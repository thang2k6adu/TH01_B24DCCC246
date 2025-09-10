import React from "react";
import { HomePage } from "../Pages/HomePage";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <HomePage />
      <Footer />
    </>
  );
}

export default App
