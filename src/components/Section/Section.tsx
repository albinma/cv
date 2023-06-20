'use client';

import classNames from 'classnames';
import * as Scroll from 'react-scroll';

type SectionProps = {
  id: string;
  title?: string;
  className?: string;
  childrenClassName?: string;
  children?: React.ReactNode;
};

export default function Section({
  id,
  title,
  className,
  childrenClassName,
  children,
}: SectionProps): JSX.Element {
  return (
    <Scroll.Element
      data-testid={`section-${id}`}
      id={id}
      name={id}
      className={classNames('md:h-auto', className)}
    >
      {title && (
        <h1 data-testid="section-title" className="text-4xl md:mt-12">
          {title}
        </h1>
      )}
      <div className={classNames('mx-auto max-w-4xl px-8', childrenClassName)}>
        {children}
      </div>
    </Scroll.Element>
  );
}
