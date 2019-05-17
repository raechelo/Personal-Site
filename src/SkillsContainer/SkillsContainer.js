import React from 'react';
import logos from '../data';
import Skill from '../Skill/Skill';

export default function Skills() {
  let displayLogos = logos.map(l => <Skill {...l} />)
  return (
    <div>
      {displayLogos}
    </div>
  )
}
