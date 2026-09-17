import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CompanyStats from "@/components/home/CompanyStats";
import Recognition from "@/components/home/Recognition";
import Branches from "../components/home/Branches";
import CarrierPartners from "@/components/home/CarrierPartners";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
         <Services />
         <WhyChooseUs />
         <Recognition />
          <CompanyStats />
          <Branches />
          <CarrierPartners />
      </main>
      <Footer />
    </>
  );
}