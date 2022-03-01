import { motion } from "framer-motion";
import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h3 className="head-text">
          Here are some <span>Technologies</span> I know
        </h3>

        <div className="app__skill-item">
          <motion.div whileInView={[{ opacity: [0, 1] }]}
            transition={{ }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
