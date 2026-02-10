import { useState } from "react";

import { type Experience, EXPERIENCES } from "./EXPERIENCES";
import ExperienceCard from "./ExperienceCard";
import Shortcuts from "./Shortcuts";
import Timeline from "./Timeline";

import "./Work.scss";

const Work = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState<
    Experience["id"]
  >(EXPERIENCES[0]["id"]);

  return (
    <section className="Work">
      <h2 className="section-title">Experience</h2>
      <Shortcuts
        selectedExperienceId={selectedExperienceId}
        setSelectedExperienceId={setSelectedExperienceId}
      />
      <Timeline
        selectedExperienceId={selectedExperienceId}
        setSelectedExperienceId={setSelectedExperienceId}
      />
      <ExperienceCard id={selectedExperienceId} />
    </section>
  );
};

export default Work;
