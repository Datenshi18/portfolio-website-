import HeroSection from './components/HeroSection';
import ScrollTextSection from './components/ScrollTextSection';
import ServicesSection from './components/ServicesSection';
import ScrollThemeTransition from './components/ScrollThemeTransition';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollTextSection />
      <ServicesSection />
      <ScrollThemeTransition />
      <ProjectShowcase />
      <ContactSection />
    </main>
  );
}