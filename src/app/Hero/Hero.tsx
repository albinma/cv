export default function Hero() {
  return (
    <div className="flex h-screen flex-col justify-center">
      <h2 className="text-4xl font-bold text-slate-500">
        Hey, I&apos;m <span className="text-pink-500">Albin Ma</span> and...
      </h2>
      <h1 className="mt-4 text-8xl font-bold text-slate-900">
        I&apos;m a Software Engineer
      </h1>
      <p className="mt-8 text-2xl text-slate-500">
        I have a passion in building things for the web.
      </p>
      <p className="mt-4 text-xl text-slate-400">
        I&apos;m currently @{' '}
        <a
          href="https://www.touchbistro.com/"
          className="font-semibold"
          target="_blank"
        >
          <span className="text-tb-primary">Touch</span>
          <span className="text-tb-secondary">Bistro</span>
        </a>{' '}
        helping with empowering restaurants with their innovative POS and cloud
        management system.
      </p>
    </div>
  );
}
