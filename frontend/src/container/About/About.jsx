import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

import "./About.scss";

// //demo data
// const abouts = [
//   {
//     title: "Software Engineer",
//     description:
//       "Peofessional software engineer with a passion for designing & building software",
//     imageUrl: images.about2,
//   },
//   {
//     title: "Web Developer",
//     description: "Web developer with an apatite for building websites",
//     imageUrl: images.about1,
//   },
//   {
//     title: "APIs",
//     description: "I love APIs and I love building them",
//     imageUrl: images.about3,
//   },
//   {
//     title: "Agile Development",
//     description: "Because that's how I roll",
//     imageUrl: images.about4_1,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Love <span>Fried Chicken</span> <br /> and <span>Building stuff</span>
      </h2>

      <div id="about" className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "abouts");
