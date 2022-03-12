import React, { useState } from "react";
import { images } from "../../container";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:w.hasnat94@gmail.com"></a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
