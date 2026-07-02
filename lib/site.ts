export const site = {
  name: 'MJ Tech Labs',
  domain: 'https://mjtechlabs.me',
  owner: 'John Muriuki',
  role: 'Full-Stack Software Developer',
  location: 'Nairobi, Kenya',
  email: 'okoth59@gmail.com',
  whatsappNumber: '254715432303',
  whatsappDisplay: '+254 715 432 303',
  yearsExperience: 5,
  tagline:
    'I design and build fast, reliable web and mobile products — from idea to launch.',
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;
