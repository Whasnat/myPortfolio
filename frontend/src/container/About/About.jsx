import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Software Engineer",
    description:
      "Peofessional software engineer with a passion for designing & building software",
    imageUrl: images.about2,
  },
  {
    title: "Web Developer",
    description: "Web developer with an apatite for building websites",
    imageUrl: images.about1,
  },
  {
    title: "APIs",
    description: "I love APIs and I love building them",
    imageUrl: images.about3,
  },
  {
    title: "Agile",
    description: "That's how I roll",
    imageUrl: images.about4_2,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Love
        <span>Fried Chicken</span>
        <br />
        and
        <span>Building stuff</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p.text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
