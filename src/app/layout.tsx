import TopNav from '@/app/TopNav';
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
      <body className="bg-slate-800">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
