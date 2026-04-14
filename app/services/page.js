import '../motion.css';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Services | Digital Lift — What We Do',
  description: 'From web design to full-stack development, branding, and performance optimization — everything your brand needs to dominate digital.',
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesContent />
      <Footer />
    </PageTransition>
  );
}
