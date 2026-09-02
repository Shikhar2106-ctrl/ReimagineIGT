import React from 'react';
import SEO from '../components/common/SEO';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import OurStorySection from '../components/sections/OurStorySection';
import CoreValuesSection from '../components/sections/CoreValuesSection';
import TimelineSection from '../components/sections/TimelineSection';
import LeadershipSection from '../components/sections/LeadershipSection';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | IntelliGreen CleanTech Innovation"
        description="Learn about IntelliGreen's journey, mission, core values, leadership team, and milestones in redefining commercial indoor air quality standards."
        keywords="About IntelliGreen, CleanTech company, environmental engineering, clean air vision, leadership team"
      />
      <AboutHeroSection />
      <OurStorySection />
      <CoreValuesSection />
      <TimelineSection />
      <LeadershipSection />
    </>
  );
}
