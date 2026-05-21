import Header from '../components/layout/Header/Header.jsx';
import Footer from '../components/layout/Footer/Footer.jsx';
import HeroSection from '../components/sections/Hero/HeroSection.jsx';
import ServicesSection from '../components/sections/Services/ServicesSection.jsx';
import ProcessSection from '../components/sections/Process/ProcessSection.jsx';
import useRevealAnimations from '../hooks/useRevealAnimations.js';
import { MainContent, PageShell } from './App.styles.js';

export default function App() {
  useRevealAnimations();

  return (
    <PageShell>
      <Header />
      <MainContent>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </MainContent>
      <Footer />
    </PageShell>
  );
}
