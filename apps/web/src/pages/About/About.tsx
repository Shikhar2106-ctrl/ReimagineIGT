import AboutHero from "@/components/sections/about/AboutHero";
import Certifications from "@/components/sections/about/Certifications";
import CoreValues from "@/components/sections/about/CoreValues";
import Leadership from "@/components/sections/about/Leadership";
import MissionVision from "@/components/sections/about/MissionVision";
import OurStory from "@/components/sections/about/OurStory";
import Timeline from "@/components/sections/about/Timeline";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Leadership />
      <Certifications />
    </>
  );
}