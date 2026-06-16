import ArrowSvg from '../assets/arrow.svg?react';

import './Featured.scss';

type Card = {
  id: string;
  byline: string;
  title: string;
  url: string;
  desc: string;
};

const CARDS: Card[] = [
  {
    id: 'UC LA',
    byline: 'Hobby Project',
    title: 'UrbanCanopy LA',
    url: 'https://urbancanopyla.vercel.app/',
    desc: 'Geospatial analytics platform visualizing green space, walkability metrics, and environmental conditions across Los Angeles. Built with Next.js, TypeScript, MapLibre, and PostGIS, leveraging large-scale spatial datasets and environmental data to deliver interactive map-based analysis.',
  },
  {
    id: 'RITIS',
    byline: 'Featured Work',
    title:
      'Regional Integrated Transportation Information System (RITIS)',
    url: 'https://ritis.org/tools#ritismap',
    desc: 'Map software handling 100k+ real-time features and geometries for federal and state agencies to conduct transportation analysis and monitoring. Implemented data visualization with Mapbox and D3 and wrote efficient processing pipelines in Node and Express, contributing across front and back end systems.',
  },
];

const Featured = () => {
  return (
    <section className='Featured'>
      {CARDS.map(card => (
        <div key={card.id} className='card'>
          <a
            href={card.url}
            aria-label={`${card.byline}: ${card.title}`}
            target='_blank'
            rel='noreferrer'
          >
            <h3>{card.byline}</h3>
            <div className='title'>
              <h4>{card.title}</h4>
              <ArrowSvg className='arrow-icon' />
            </div>
            <p className='desc'>{card.desc}</p>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Featured;
