import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import HistoryTimeline from "@/components/HistoryTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandShowcase />
      <HistoryTimeline />
      <Footer />
    </div>
  );
};

export default Index;
