import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitalij | Автор & Архітектор Світів',
  description: 'Офіційний портал автора: всесвіти «Етерія», «Касіопея», технології POLER-Engine та дослідження.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="dark">
      <body className="bg-[#08090d] text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
