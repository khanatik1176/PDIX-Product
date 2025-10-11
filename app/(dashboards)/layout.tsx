import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scribbler',
  description: 'Performance Automation for PentadevIX Team',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Providers>
        <Sidebar>{children}</Sidebar>
      </Providers>
      <Toaster />
    </div>
  );
}
