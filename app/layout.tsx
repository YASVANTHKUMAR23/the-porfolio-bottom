import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'Cinematic Timeline',
  description: 'A premium, cinematic scroll-driven vertical timeline',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${syne.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
