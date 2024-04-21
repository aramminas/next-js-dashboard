import '@/app/ui/global.css';
import { Metadata } from 'next';
import Navbar from '@/app/ui/basic/navbar';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The Next.js Dashboard Application.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </main>
  );
}
