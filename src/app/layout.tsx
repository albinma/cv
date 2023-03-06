import './globals.css';
import SideNav from './SideNav';

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
        <SideNav />
        {children}
      </body>
    </html>
  );
}
