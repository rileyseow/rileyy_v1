/**
 * @file Constants file for work experience descriptions and metadata.
 */

export interface Experience {
  /** Unique ID for the place of work */
  id: string;
  /** Optional shortened name for the place of work */
  shortName?: string;
  /** Full name for the place of work */
  longName: string;
  /** Name of the role at the place of work */
  role: string;
  /** Optional link for the place of work */
  link?: string;
  /** Description of duration of time worked, in format `${month year} - ${month year}` */
  durationDesc: string;
  /** List of descriptions for achievements at the place of work */
  achievements: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "CATT",
    longName: "Center for Advanced Transportation Technology",
    role: "Software Engineer",
    link: "https://www.cattlab.umd.edu",
    durationDesc: "Oct 2023 - Nov 2025",
    achievements: [
      "Delivered client- and server-side contributions across three codebases: querying data from servers, databases, and external APIs, and implementing efficient processing pipelines.",
      "Built high-performance algorithms to process and visualize live data across map layers (e.g. traffic incidents and events, nationwide cameras, dynamic signs, transit, probe speed), handling hundreds of thousands of feature points and geometries refreshed up to every 15 seconds.",
      "Served as a key contributor to a multi-million-dollar revamp of the RITIS map, a real-time platform used by federal and state transportation agencies.",
      "Mentored undergraduate and graduate student interns.",
    ],
  },
  {
    id: "LIT",
    shortName: "?",
    longName:
      "Stanford University, Oxford University, George Washington University, Independent",
    role: "Literature Student",
    durationDesc: "Jun 2020 - Mar 2024",
    achievements: [
      "Added and completed a B.A. in Comparative Literature from Stanford.",
      "Studied abroad and completed a tutorial in Korean Studies at Oxford University.",
      "Won an essay competition at George Washington University and traveled to South Korea on a partially academic-funded trip for two months.",
      "Worked as a competitive writing coach for high schoolers awarded in regional, national, and international competitions (Scholastic, YoungArts, Harvard Crimson Global Essay, etc).",
    ],
  },
  {
    id: "CESTA",
    longName: "Stanford Center for Spatial and Textual Analysis",
    role: "Technical Research Intern",
    link: "https://cesta.stanford.edu",
    durationDesc: "Jun 2020 - Aug 2020",
    achievements: [
      "Built a Python web scraper to extract, clean, and categorize character data from Schmoop and LitCharts for a project exploring textual personhood in English classic novels.",
      "Automated data transformation and export into structured CSV format for downstream use by the word-association modeling team.",
      "Created scalable, reproducible data pipelines to enable subsequent NLP analysis and modeling.",
    ],
  },
  {
    id: "PDP",
    longName: "Stanford Parallel Distributed Processing Lab",
    role: "Research Assistant",
    link: "https://web.stanford.edu/group/pdplab",
    durationDesc: "Nov 2019 - Mar 2020",
    achievements: [
      "Developed Javascript code for a web-based speed arithmetic task deployed on Amazon Mechanical Turk to collect behavioral psychology data at scale.",
      "Collaborated with a PhD researcher to begin evaluating neural network training approaches on the collected dataset, supporting cognitive modeling efforts at the intersection of neuroscience and machine learning.",
    ],
  },
  {
    id: "BLAIR",
    longName: "UCLA Blair Lab",
    role: "Research Assistant",
    link: "https://www.psych.ucla.edu/faculty-page/tadblair",
    durationDesc: "Jun 2019 - Aug 2019",
    achievements: [
      "Helped develop an open-source GUI for analyzing in-vivo calcium imaging data collected using UCLA Miniscope technology.",
      "Implemented high-performance data visualization algorithms in C# to render real-time neural activity, including max image projections, cell contour overlays, and calcium tracing graphs.",
    ],
  },
] as const;
