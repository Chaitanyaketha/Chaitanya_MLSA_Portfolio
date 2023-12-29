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
import image from "../images/computer.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "From Novices to Cloud Titans🌩: Our Journey to Tier-1 & top 10 Status among Google Developer Students Clubs 🎉",
    description:
      "This is my blog on the the Google Cloud whenn i had performed as a facilitator in college",
    url: "https://medium.com/@kethadvchaitanya/from-novices-to-cloud-titans-our-journey-to-tier-1-top-10-status-among-google-developer-ad1a4f2af7f5",
  },
  {
    title: "Google Cloud certifications",
    description:
      "",
    url: "https://scl.io/nc9Fkgz",
  },
  {
    title: "My Resume",
    description:
      "This is my resume that have my experiences, Achievements, Position of Responsibilities and Projects done in my graduation..",
    url: "https://drive.google.com/file/d/1pp3ga7TIisaIqxtrSN3qBe3PqVKsvOLm/view?usp=drivesdk",
  },
  {
    title: "Google Cloud Sessions in GDSC",
    description:
      "Explained about basic cloud computing and various services offered by Google CLoud and AWS,AZURE.",
    url: "https://gdsc.community.dev/events/details/developer-student-clubs-pragati-engineering-college-kakinada-presents-google-cloud-study-jams-session-1/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
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
