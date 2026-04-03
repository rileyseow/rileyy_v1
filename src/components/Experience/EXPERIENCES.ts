/**
 * @file Constants file for work experience metadata and descriptions.
 */

export interface Experience {
  /** Unique ID for the place of work */
  id: string;
  /** Full name for the place of work */
  organization: string;
  /** Name of the role at the place of work */
  role: string;
  /** Optional link for the place of work */
  link?: string;
  /** Description of duration of time worked, in format `${year}–${year}` */
  durationDesc: string;
  /** Description of impact in role */
  coreImpact: string;
  /** Detailed list of achievements in role */
  achievements?: string[];
}

/**
 * @constant
 * @description String tag surrounding chip text in `coreImpact`
 * and `achievements` fields.
 */
export const CHIP_BREAK_TAG = '**';

/**
 * @constant
 * @description List of work experience entries as defined by
 * the {@interface Experience}.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: 'CATT',
    organization:
      'Center for Advanced Transportation Technology (CATT) Lab',
    role: 'Software Engineer',
    link: 'https://www.cattlab.umd.edu',
    durationDesc: '2023–2025',
    coreImpact:
      'Built map software for transportation operators with real-time global data.',
    achievements: [
      '**100k+** features processed with **15s refresh** cycles',
      'Core contributor to **RITIS** platform used by federal + state agencies',
      'Improved **performance** + **system clarity** across critical pipelines',
    ],
  },
  {
    id: 'LIT',
    organization: 'Stanford / Oxford / GWU',
    role: 'Literature Student',
    link: 'https://ealc.stanford.edu/news/congratulations-riley-seow-first-place-humanities-category-gwiks',
    durationDesc: '2020–2023',
    coreImpact:
      'Completed additional B.A. in Comparative Literature, studied Korean Studies at Oxford, won scholarship trip to Korea, worked as competitive writing coach and education consultant',
  },
  {
    id: 'CESTA',
    organization: 'Stanford CESTA',
    role: 'Technical Research Intern',
    link: 'https://github.com/rileyseow/personhood-litguide-scraper',
    durationDesc: '2020',
    coreImpact:
      'Built **Python** web scraper to extract, clean, and categorize character data in English classic novels, enabling downstream **NLP** modeling',
  },
  {
    id: 'PDP',
    organization: 'Stanford PDP Lab',
    role: 'Research Assistant',
    link: 'https://web.stanford.edu/group/pdplab',
    durationDesc: '2019–2020',
    coreImpact:
      'Developed **JavaScript** code for large-scale data collection in behavioral psychology experiments',
  },
  {
    id: 'BLAIR',
    organization: 'UCLA Blair Lab',
    role: 'Research Assistant',
    link: 'https://www.psych.ucla.edu/faculty-page/tadblair',
    durationDesc: '2019',
    coreImpact:
      'Built **real-time** data visualization tools in **C#** to process in-vivo calcium brain imaging data',
  },
] as const;
