/* eslint-disable react/prop-types */
import React from 'react';
import TeamMember from './TeamMember';
import '../../styles/About.scss';

const Team2021s2 = ({ teammembers }) => (
  <div className="projectContainer">
    <div className="heading" variant="h4" display="block">
      Team 2021s2
    </div>
    <div className="teamMembers">

      {teammembers.map((m) => (
        <TeamMember
          key={m.name}
          name={m.name}
          photo={m.photo}
          github={m.github}
          linkedIn={m.linkedIn}
          desc={m.desc}
          title={m.title}
        />
      ))}
    </div>
  </div>
);

export default Team2021s2;
