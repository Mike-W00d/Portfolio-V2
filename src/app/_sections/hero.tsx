import Image from 'next/image';

const Hero = () => {
  return (
<div className="w-full min-h-screen flex flex-col lg:flex-row justify-center gap-10 px-4 lg:px-0">
  <div className="lg:w-1/2 text-2xl font-bold text-center lg:text-left">
    Hi, I'm Mike. I am a full stack developer specializing in Node, Tailwind CSS, TypeScript, and MongoDB.
  </div>
  
  <div className="lg:w-1/2 text-center lg:text-left relative flex justify-center items-center">
    <Image src="/hero.png" alt="Hero" width={450} height={550} className="relative z-10 rounded-full" />
  </div>
</div>
  );
}

export default Hero;
