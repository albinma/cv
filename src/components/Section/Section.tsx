'use client';

import * as Scroll from 'react-scroll';

type SectionProps = {
  id: string;
  title?: string;
  children?: React.ReactNode;
};

export default function Section({
  id,
  title,
  children,
}: SectionProps): JSX.Element {
  return (
    <Scroll.Element data-testid="section" name={id} className="h-screen">
      {title && (
        <h1 data-testid="section-title" className="text-4xl md:mt-12">
          {title}
        </h1>
      )}

      {children}
    </Scroll.Element>
  );
}
