'use client';

import * as Scroll from 'react-scroll';

type SectionProps = {
  name: string;
  children?: React.ReactNode;
};

export default function Section({ name, children }: SectionProps) {
  return (
    <Scroll.Element name={name} className="h-screen">
      <h1 className="text-4xl">{name}</h1>
      {children}
    </Scroll.Element>
  );
}
