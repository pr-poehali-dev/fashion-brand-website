import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import BrandComparison from "@/components/BrandComparison";
import FamousAthletes from "@/components/FamousAthletes";
import HistoryTimeline from "@/components/HistoryTimeline";
import TechnologyEvolution from "@/components/TechnologyEvolution";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandShowcase />
      <BrandComparison />
      <FamousAthletes />
      <HistoryTimeline />
      <TechnologyEvolution />
      <Footer />
    </div>
  );
};

export default Index;
