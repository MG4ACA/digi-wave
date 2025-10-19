import About from '@/components/About';
import BrandLogos from '@/components/BrandLogos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurAdvantage from '@/components/OurAdvantage';
import Services from '@/components/Services';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <OurAdvantage />
      <BrandLogos />
      <TeamSection />
      <Contact />
      <Footer />
    </main>
  );
}
