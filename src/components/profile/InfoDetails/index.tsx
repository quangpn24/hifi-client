import React from 'react';
import AboutMe from './AboutMe';
import AwardsSection from './Awards';
import Education from './Education';
import JobInterests from './JobInterests';
import ResumeSection from './Resume';
import Skills from './Skills';
import VolunteerExperience from './VolunteerExperience';
import WorkExperience from './WorkExperience';

type Props = {};

const InfoDetails = (props: Props) => {
  return (
    <div className='bg-white shadow-md p-3 mt-4 rounded-md'>
      <AboutMe content='' />
      <WorkExperience />
      <Education />
      <Skills />
      <JobInterests />
      <ResumeSection />
      <AwardsSection />
      <VolunteerExperience />
    </div>
  );
};

export default InfoDetails;
