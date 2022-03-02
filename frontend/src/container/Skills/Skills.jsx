import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experienceQuery = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;
    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <div id="skills">
        <h3 className="head-text">
          <span>Skills</span> & <span>Experience</span>
        </h3>

        <div className="app__skill-item">
          <motion.div className="app__skill-list">
            {Skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skill-item"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
