export type Service = {
  slug: string;
  title: string;
  icon: string;
  price?: string;
  priceNote?: string;
  featured?: boolean;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description:
      'Modern, responsive websites and web applications built with React, Next.js and Node.js — fast to load, easy to manage, and ready to grow with your business.',
    points: [
      'Business websites & landing pages',
      'Custom web applications & dashboards',
      'Progressive Web Apps (PWA)',
      'Performance & SEO optimisation',
    ],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    icon: '📱',
    description:
      'Cross-platform Android and iOS apps built with React Native and Flutter, from prototype to app-store launch.',
    points: [
      'Android & iOS from one codebase',
      'Offline-first & push notifications',
      'Play Store / App Store publishing',
      'Ongoing maintenance & updates',
    ],
  },
  {
    slug: 'backend-apis',
    title: 'Backend & API Development',
    icon: '⚙️',
    description:
      'Secure, scalable backends and REST/GraphQL APIs with Node.js, Python and PostgreSQL — including payment integrations like M-Pesa and Stripe.',
    points: [
      'REST & GraphQL API design',
      'M-Pesa, Stripe & PayPal integrations',
      'Authentication & role-based access',
      'Database design & optimisation',
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Solutions',
    icon: '🛒',
    description:
      'Complete online stores — product catalogues, carts, checkout, payments and order management — built to convert visitors into customers.',
    points: [
      'Custom stores & Shopify builds',
      'Payment gateway integration',
      'Inventory & order management',
      'Analytics & conversion tracking',
    ],
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    icon: '🎨',
    description:
      'Clean, intuitive interfaces designed around your users — wireframes, prototypes and design systems that make products a joy to use.',
    points: [
      'Wireframing & prototyping',
      'Design systems & style guides',
      'Mobile-first responsive design',
      'Usability reviews & improvements',
    ],
  },
  {
    slug: 'dropshipping-course',
    title: 'Dropshipping — Complete Course',
    icon: '🚀',
    price: '$500',
    priceNote: 'one-time · lifetime access',
    featured: true,
    description:
      'A complete, hands-on course that takes you from zero to a running dropshipping business — store setup, winning products, suppliers, marketing and scaling. Learn directly from me with practical, step-by-step guidance.',
    points: [
      'Store setup from scratch (Shopify & alternatives)',
      'Product research & winning-product frameworks',
      'Supplier sourcing & order fulfilment',
      'Facebook, TikTok & Google ads that convert',
      'Branding, pricing & profit strategy',
      'Scaling, automation & ongoing mentorship',
    ],
  },
];
