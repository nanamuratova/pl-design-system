import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PL Design System',
  description: 'Protocol Labs Design System — components and tokens from Figma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
