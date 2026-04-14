import '../motion.css';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import WorkGrid from './WorkGrid';

export const metadata = {
  title: 'Work | Digital Lift — Selected Projects',
  description: 'Explore our portfolio of premium digital experiences. Each project is crafted with cinematic precision and strategic intent.',
};

export default function WorkPage() {
  return (
    <PageTransition>
      <WorkGrid />
      <Footer />
    </PageTransition>
  );
}
