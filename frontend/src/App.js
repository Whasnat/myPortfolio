import React from "react";
import "./App.scss";

import {
  About,
  Footer,
  Header,
  // Experience,
  Skills,
  // Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Experience /> */}
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
