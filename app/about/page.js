import '../motion.css';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import AboutContent from './AboutContent';

export const metadata = {
  title: 'About | Agency. — Who We Are',
  description: 'We are a collective of designers, developers, and strategists obsessed with crafting digital experiences that feel cinematic and convert at scale.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutContent />
      <Footer />
    </PageTransition>
  );
}
