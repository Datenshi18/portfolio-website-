import '../../motion.css';
import PageTransition from '../../components/PageTransition';
import Footer from '../../components/Footer';
import CaseStudyContent from './CaseStudyContent';

const projectData = {
  'van-der-linde-agency': {
    title: 'The Van Der Linde Agency',
    category: 'Branding & Web Design',
    year: '2026',
    overview: 'A complete brand identity and web platform for a visionary agency redefining frontier digital experiences. The project demanded a balance of raw, cinematic energy and refined, modern design principles.',
    challenge: 'The client needed to stand out in a saturated market of cookie-cutter agency websites. They wanted something that felt like a cinematic experience — not just a website, but a statement.',
    solution: 'We crafted a dark, atmospheric design language with deliberate use of whitespace, bold typography, and a restrained red accent palette. Every interaction was designed to feel intentional and premium.',
    results: [
      '340% increase in qualified leads within 3 months',
      '92% positive feedback on brand perception survey',
      'Featured in Awwwards SOTD nominations',
      'Average session duration increased by 2.4x',
    ],
  },
  'outlaw-systems': {
    title: 'Outlaw Systems',
    category: 'Web Development',
    year: '2025',
    overview: 'High-performance web architecture for a tech company that refuses to follow convention. Built for speed, built for impact.',
    challenge: 'Legacy codebase with poor performance metrics. The platform needed to serve 50K+ daily users without compromising on visual fidelity.',
    solution: 'Complete architectural overhaul using modern frameworks, edge computing, and aggressive performance optimization. Sub-second load times across all pages.',
    results: [
      'Page load time reduced from 4.2s to 0.8s',
      '99.9% uptime over 12 months',
      'Core Web Vitals all in green',
      '67% reduction in bounce rate',
    ],
  },
  'frontier-digital': {
    title: 'Frontier Digital',
    category: 'E-Commerce',
    year: '2025',
    overview: 'A modern e-commerce platform that merges cinematic aesthetics with conversion-optimized UX for a lifestyle brand.',
    challenge: 'The brand had strong physical presence but struggled to translate their rugged, premium identity into digital commerce.',
    solution: 'We built a custom e-commerce experience with immersive product storytelling, dynamic filtering, and a seamless checkout flow that maintained the brand\'s cinematic feel.',
    results: [
      '280% increase in online revenue',
      'Cart abandonment reduced by 35%',
      'Mobile conversion rate up 4.1x',
      'Average order value increased by 22%',
    ],
  },
  'redemption-ii': {
    title: 'Redemption II',
    category: 'Design Systems',
    year: '2024',
    overview: 'A comprehensive design system that balances raw creative energy with systematic precision. Built to scale across products and teams.',
    challenge: 'Inconsistent UI across 12+ products leading to brand fragmentation and developer inefficiency.',
    solution: 'We designed and documented a complete token-based design system with component library, interaction patterns, and governance guidelines.',
    results: [
      'Design-to-dev handoff time reduced by 60%',
      'UI consistency score improved from 42% to 96%',
      'Adopted across all 12 product teams',
      'Reduced design debt by an estimated 400 hours annually',
    ],
  },
  'iron-horse-studios': {
    title: 'Iron Horse Studios',
    category: 'Motion & Branding',
    year: '2024',
    overview: 'Bold identity design and motion graphics for a creative studio known for pushing boundaries.',
    challenge: 'Needed a visual identity as bold and unapologetic as their creative output.',
    solution: 'We developed a kinetic identity system with custom typography, dynamic motion templates, and a visual language that adapts across formats.',
    results: [
      'Brand recognition increased by 180%',
      'Social media engagement up 5x',
      'Won 3 industry design awards',
      'Client retention rate improved to 94%',
    ],
  },
  'blackwater-digital': {
    title: 'Blackwater Digital',
    category: 'Full Package',
    year: '2024',
    overview: 'End-to-end digital transformation encompassing brand strategy, UX design, development, and performance optimization.',
    challenge: 'A complete digital overhaul for a company transitioning from traditional to digital-first operations.',
    solution: 'Full-stack approach: research-driven strategy, user-centered design, performant architecture, and ongoing optimization partnership.',
    results: [
      'Digital revenue grew 420% year-over-year',
      'Customer satisfaction score reached 4.8/5',
      'Organic traffic increased by 310%',
      'Platform serves 100K+ monthly active users',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projectData[params.slug];
  if (!project) {
    return { title: 'Project Not Found | Digital Lift' };
  }
  return {
    title: `${project.title} | Digital Lift — Case Study`,
    description: project.overview,
  };
}

export default function CaseStudyPage({ params }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <PageTransition>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ fontFamily: 'var(--font-bebas-neue)', fontSize: '3rem', color: '#F5F5F5' }}>Project Not Found</h1>
          <p style={{ color: '#8A8A8A' }}>The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <CaseStudyContent project={project} />
      <Footer />
    </PageTransition>
  );
}
