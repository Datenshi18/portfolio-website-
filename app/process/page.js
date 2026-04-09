import '../motion.css';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import ProcessContent from './ProcessContent';

export const metadata = {
  title: 'Process | Agency. — How We Work',
  description: 'Our proven process takes projects from vision to reality. Discovery, strategy, design, develop, launch, and optimize.',
};

export default function ProcessPage() {
  return (
    <PageTransition>
      <ProcessContent />
      <Footer />
    </PageTransition>
  );
}
