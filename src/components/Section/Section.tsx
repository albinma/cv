'use client';

import cn from 'classnames';
import * as Scroll from 'react-scroll';

type SectionProps = {
  id: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Section({
  id,
  title,
  className,
  children,
}: SectionProps): JSX.Element {
  return (
    <Scroll.Element
      data-testid={`section-${id}`}
      name={id}
      className={cn('md:h-screen', className)}
    >
      {title && (
        <h1 data-testid="section-title" className="text-4xl md:mt-12">
          {title}
        </h1>
      )}
      <div className="mx-auto max-w-4xl px-8">{children}</div>
    </Scroll.Element>
  );
}
