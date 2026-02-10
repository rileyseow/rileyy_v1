import type { ReactNode } from "react";

import ArrowUpRightSvg from "../../assets/arrowUpRight.svg?react";
import {
  type Experience,
  ACHIEVEMENTS_LINKS,
  EXPERIENCES,
} from "./EXPERIENCES";

import "./ExperienceCard.scss";

const ExperienceCard = ({ id }: { id: Experience["id"] }) => {
  const { longName, role, link, durationDesc, achievements } = EXPERIENCES.find(
    (experience) => experience.id === id,
  )!;

  let processedAchievements: ReactNode[] = achievements;
  const linksToAdd = ACHIEVEMENTS_LINKS.filter((f) => f.id === id);

  if (linksToAdd.length) {
    processedAchievements = achievements.map((achievement) => {
      for (const f of linksToAdd) {
        if (achievement.includes(f.text)) {
          const split = achievement.split(f.text, 2);
          return [
            split[0],
            <a className="link" href={f.link} target="_blank" rel="noreferrer">
              {f.text}
            </a>,
            split[1],
          ];
        }
      }
      return achievement;
    });
  }

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
        {processedAchievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
