import React, { FC } from 'react';

type Job = {
  id: string;
  order: 3;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

type Props = {
  jobs: Job[] | null;
};

const Card: FC<Props | null> = (props) => {
  if (!props.jobs) {
    return <div>No Jobs</div>;
  }

  const { title, dates, duties, company } = props.jobs[0];

  return (
    <div className='artboard'>
      <div className='card'>
        <div className='card__side card__side--back'>
          <div className='card__cover'>
            <h4 className='card__heading'>
              <span className='card__heading-span'>Skill Set</span>
            </h4>
          </div>
          <div className='card__details'>
            <ul>
              <li>{duties[0]}</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className='card__side card__side--front'>
          <div className='card__theme'>
            <div className='card__theme-box'>
              <p className='card__subject'>{title}</p>
              <p className='card__title'>{company}</p>
              <p className='card__subject'>{dates}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
