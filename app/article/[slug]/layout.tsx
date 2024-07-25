import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Article',
  description: 'Интересующая статья',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
