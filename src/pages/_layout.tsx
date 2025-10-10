
import '../styles.css';
import type { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <div className="flex flex-col h-4/5 w-full">
      <meta charSet='utf-8' />
      <link rel="icon" type="image/png" href={`/images/favicon.png`} />
    <Header />
      <main className="m-6 flex z-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
