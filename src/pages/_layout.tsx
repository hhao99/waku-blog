import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="flex flex-col h-4/5 w-full">
      <meta charSet='utf-8' />
      <link rel="icon" type="image/png" href={data.icon} />

    <Header />
      <main className="m-6 flex z-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
