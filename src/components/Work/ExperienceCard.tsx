import ArrowUpRightSvg from "../../assets/arrowUpRight.svg?react";
import { type Experience, EXPERIENCES } from "./EXPERIENCES";

import "./ExperienceCard.scss";

const ExperienceCard = ({ id }: { id: Experience["id"] }) => {
  const { longName, role, link, durationDesc, achievements } = EXPERIENCES.find(
    (experience) => experience.id === id,
  )!;

  return (
    <div className="ExperienceCard">
      <div className="metadata">
        <span className="title">
          <span>{`${role} @ `}</span>
          {link ? (
            <a className="link" href={link} target="_blank" rel="noreferrer">
              {longName}
              <ArrowUpRightSvg />
            </a>
          ) : (
            <span>{longName}</span>
          )}
        </span>
        <span className="duration">{durationDesc}</span>
      </div>
      <ul className="achievements-desc">
        {achievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
