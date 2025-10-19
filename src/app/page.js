import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurAdvantage from '@/components/OurAdvantage';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <OurAdvantage />
      <Contact />
      <Footer />
    </main>
  );
}
