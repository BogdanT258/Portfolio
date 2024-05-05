import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function handleClick(e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');

  if (href) {
    window.location.href = href;
  } else {
    Toastify({
      text: "This project doesn't have a host link!",
      duration: 3000,
      gravity: "bottom", 
      position: "center",
    }).showToast();
  }
}


function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4 flex justify-center mr-4"
            >
              <img
                src={project.image}
                max-width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.host} onClick={handleClick}><h6 className="mb-2 font-semibold underline-animated">{project.title}</h6></a>
              <br />
              <a
                href={project.link}
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Learn more
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font0medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
