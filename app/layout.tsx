import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.owner} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.owner} is a full-stack software developer from Kenya with ${site.yearsExperience}+ years of experience building web apps, mobile apps, APIs and e-commerce solutions.`,
  keywords: [
    'John Muriuki',
    'MJ Tech Labs',
    'Full-Stack Developer Kenya',
    'Web Developer Nairobi',
    'Software Developer Kenya',
    'Dropshipping Course',
  ],
  openGraph: {
    title: `${site.name} — ${site.owner}`,
    description: site.tagline,
    url: site.domain,
    siteName: site.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
