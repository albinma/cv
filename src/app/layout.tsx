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
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Nav />
        {children}
      </body>
    </html>
  );
}
