import ArrowUpRightSvg from "../assets/arrowUpRight.svg?react";

import "./About.scss";

const About = () => {
  return (
    <section className="About">
      <p>Hi, this is Riley.</p>
      <p>
        I’m a frontend-focused software engineer with experience building
        data-intensive applications for government transportation agencies,
        neuroscience research labs, and elsewhere.
      </p>
      <p>
        I studied computer science via an interdisciplinary degree in
        <a
          className="link"
          href="https://symsys.stanford.edu"
          target="_blank"
          rel="noreferrer"
        >
          Symbolic Systems
          <ArrowUpRightSvg />
        </a>
        from Stanford. That background shapes how I approach engineering: I love
        solving problems across domains and ramping up on new tools. I care
        deeply about building intuitive, scalable systems that focus on
        technical depth, user clarity — and great documentation.
      </p>
      <p>
        Most recently, I’ve been a developer at the
        <a
          className="link"
          href="https://www.cattlab.umd.edu"
          target="_blank"
          rel="noreferrer"
        >
          Center for Advanced Transportation Technology (CATT) Laboratory
          <ArrowUpRightSvg />
        </a>
        , where I worked with large geospatial datasets to build real-time
        mapping software for federal and state agencies.
      </p>
      <p>
        I’m currently seeking a mission-driven role where I can contribute as a
        thoughtful engineer, collaborate across disciplines, and continue
        deepening my technical skillset.
      </p>
    </section>
  );
};

export default About;
