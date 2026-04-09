import '../motion.css';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import ContactPageContent from './ContactPageContent';

export const metadata = {
  title: 'Contact | Agency. — Start Your Project',
  description: 'Ready to build something extraordinary? Tell us about your project and we\'ll craft a solution that exceeds expectations.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactPageContent />
      <Footer />
    </PageTransition>
  );
}
