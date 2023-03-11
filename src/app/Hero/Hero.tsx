export default function Hero() {
  return (
    <div className="flex h-screen flex-col justify-center">
      <h2 className="text-xl font-bold text-slate-500 md:text-4xl">
        Hey, I&apos;m <span className="text-pink-500">Albin Ma</span> and...
      </h2>
      <h1 className="mt-4 text-5xl font-bold text-slate-900 md:text-8xl">
        I&apos;m a Software Engineer
      </h1>
      <p className="text-md mt-16 text-slate-400 md:text-2xl">
        I&apos;m currently working hard @{' '}
        <a
          href="https://www.touchbistro.com/"
          className="font-semibold"
          target="_blank"
        >
          <span className="text-tb-primary">Touch</span>
          <span className="text-tb-secondary">Bistro</span>
        </a>{' '}
        building features that empower restaurants.
      </p>
    </div>
  );
}
