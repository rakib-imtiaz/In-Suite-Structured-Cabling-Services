import PageShell from "@/components/PageShell";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <PageShell>
      <Header />
      <Hero />
      <Stats />
      <TrustBar />
      <ProblemSolution />
      <WhoWeServe />
      <Services />
      <Pricing />
      <Process />
      <WhyChooseUs />
      <ProjectGallery />
      <FAQ />
      <Contact />
      <Footer />
    </PageShell>
  );
}










