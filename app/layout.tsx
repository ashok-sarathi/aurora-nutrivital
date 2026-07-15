import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';
import { publicPath } from '@/lib/public-path';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aurora Nutrivital | Ancient Nutrition for Modern Life',
  description:
    'Aurora Nutrivital brings the wisdom of traditional Indian superfoods combined with modern nutrition science. Discover natural, millet-based health products for your family.',
  keywords:
    'health mix, nutrition, millets, natural ingredients, family wellness, Indian superfoods',
  authors: [{ name: 'Aurora Nutrivital' }],
  icons: {
    icon: [
      { url: publicPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: publicPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: publicPath('/favicon.ico'), sizes: 'any' },
    ],
    apple: publicPath('/apple-touch-icon.png'),
    other: [
      {
        rel: 'android-chrome-192x192',
        url: publicPath('/android-chrome-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: publicPath('/android-chrome-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
      {
        rel: 'manifest',
        url: publicPath('/site.webmanifest'),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', geistSans.variable, geistMono.variable, 'font-sans', inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
