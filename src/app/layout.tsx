import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Provider from './_trpc/Providers';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next13-TRPC-Drizzle-Neon',
  description: 'Next13-TRPC-Drizzle-Neon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="min-h-screen flex-col w-full justify-between max-w-3xl mx-auto border-2 border-blue-400 px-4 flex py-8">
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
