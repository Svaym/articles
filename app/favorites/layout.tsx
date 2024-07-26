import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import Providers from '../store/Providers';

const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Избранные статьи',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
