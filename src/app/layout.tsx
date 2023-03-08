import './globals.css';
import Nav from './Nav';

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
      <body className="bg-white dark:bg-slate-800">
        <Nav />
        {children}
      </body>
    </html>
  );
}
