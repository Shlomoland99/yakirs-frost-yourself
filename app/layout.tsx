import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yakir's Fine Jewelry | Frost Yourself",
  description: 'Timeless Radiance. Define yourself with radiance, class, and elegance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
