import Nav from '@/app/Nav/Nav';
import './globals.css';

export const metadata = {
  title: 'Albin Ma',
  description: 'Personal CV and portfolio of Albin Ma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <div className="container mx-auto max-w-4xl px-8">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
