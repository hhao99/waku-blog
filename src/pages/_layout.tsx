import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html>
      <head>
      <meta charSet='utf-8' />
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />

      </head>
    <body className="flex flex-col h-4/5 w-full">
      <Header />
      <main className="m-6 flex z-100">
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
