import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <WhoWeServe />
      <Services />
      <Process />
      <WhyChooseUs />
      <ProjectGallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}










