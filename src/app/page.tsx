
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import Header from "../Landing/Header";
import Services from "../Landing/Services";
import TechnologyEcosystem from "../Landing/TechnologyEcosystem";
import IndustrySolutions from "../Landing/IndustrySolutions";
import AiDevelopment from "../Landing/AiDevelopment";
import AwsCapabilities from "../Landing/AwsCapabilities";
import OurProcess from "../Landing/OurProcess";
import AboutFicode from "../Landing/AboutFicode";
import ClientNetwork from "../Landing/ClientNetwork";
import CaseStudies from "../Landing/CaseStudies";
import ClientExperience from "../Landing/ClientExperience";
import Faq from "../Landing/Faq";
import ContactCta from "../Landing/ContactCta";
import VideoTestomonial from "../Landing/VideoTestomonial";

export default function Home() {
  return (
    <div id="top">
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-semibold text-blue-800 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <MotionReveal><Header /></MotionReveal>
        <MotionReveal><Services /></MotionReveal>
        <MotionReveal><TechnologyEcosystem /></MotionReveal>
        <MotionReveal><IndustrySolutions /></MotionReveal>
        <MotionReveal><AiDevelopment /></MotionReveal>
        <MotionReveal><AwsCapabilities /></MotionReveal>
        <MotionReveal><OurProcess /></MotionReveal>
        <MotionReveal><AboutFicode /></MotionReveal>
        <MotionReveal><ClientNetwork /></MotionReveal>
        <MotionReveal><CaseStudies /></MotionReveal>
        <MotionReveal><ClientExperience /></MotionReveal>
        <MotionReveal><VideoTestomonial /></MotionReveal>
        <MotionReveal><Faq /></MotionReveal>
        <MotionReveal><ContactCta /></MotionReveal>
      </main>
      <MotionReveal><Footer /></MotionReveal>
    </div>
  );
}
