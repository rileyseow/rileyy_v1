import ArrowSvg from '../assets/arrow.svg?react';

import './Featured.scss';

const WORK_TITLE_TEXT =
  'Regional Integrated Transportation Information System (RITIS)';

const Featured = () => {
  return (
    <section className='Featured'>
      <a
        href='https://ritis.org/tools#ritismap'
        aria-label={`Featured work: ${WORK_TITLE_TEXT}`}
        target='_blank'
        rel='noreferrer'
      >
        <h3>Featured Work</h3>
        <div className='work-title'>
          <h4>{WORK_TITLE_TEXT}</h4>
          <ArrowSvg className='arrow-icon' />
        </div>
        <p className='work-description'>
          Map software handling 100k+ real-time features and
          geometries for federal and state agencies to
          conduct transportation analysis and monitoring.
          Implemented data visualization with Mapbox and D3
          and wrote efficient processing pipelines in Node
          and Express, contributing across front and back
          end systems.
        </p>
      </a>
    </section>
  );
};

export default Featured;
