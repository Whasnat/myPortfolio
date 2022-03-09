import { motion } from "framer-motion";
import React from "react";
import "./Testimonial.scss";
import { client, AppWrap } from "../../wrapper";
const Testimonial = () => {
  return (
    <>
      <div id="testimonial">
        <h3 className="head-text">
          <span>Here</span> is what people say about <span>Me</span>
        </h3>

        <div className="app__testimonial-container">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__testimonial-item app__flex"
          >
            <div className="app__testimonial-list"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Testimonial, "testimonial");
