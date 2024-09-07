/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/DC_Donates_logo_regular.png";

const imageAltText = "Datacamp Donates logo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "We've partenered with DataCamp Donates 🎉",
    description:
      " We are offering 50 scholarships to our community members to support their learning with wonderful resources. ",
    url: "https://www.datacamp.com/ ",
  },
  {
    title: "Tech Talks ",
    description:
      "Engaging discussions with industry experts and leaders who share their insights and experiences.",
    url: " ",
  },
  {
    title: "Workshops 🎉",
    description:
      " Interactive sessions on various tech topics, from programming and software development to AI and cloud computing.",
    url: " ",
  },

  {
    title: "Networking Events ",
    description:
      "Regular meetups and networking sessions to connect with like-minded individuals, build professional relationships, and exchange ideas.",
    url: " ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>What we offer</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
