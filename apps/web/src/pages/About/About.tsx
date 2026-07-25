import AboutHero from "@/components/sections/about/AboutHero";
import Certifications from "@/components/sections/about/Certifications";
import CoreValues from "@/components/sections/about/CoreValues";
import Leadership from "@/components/sections/about/Leadership";
import MissionVision from "@/components/about/mission-vision/MissionVision";
import OurStory from "@/components/sections/about/OurStory";
import Timeline from "@/components/sections/about/Timeline";
import Footer from "@/components/sections/Footer";
import Showcase from "@/components/showcase/Showcase";
import Products from "@/components/sections/Products";

export default function About() {
  return (
    <main className="bg-surface">
      <AboutHero />
      <OurStory />
      {/* <MissionVision /> */}
      <MissionVision />
      <CoreValues />
      <Products />
      <Showcase/>
      <Timeline />
      <Leadership />
      <Certifications />
      <Footer />
    </main>
  );
}
