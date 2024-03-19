import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-0">
      <div className="lg:w-1/2 text-2xl font-bold text-center lg:text-left">
        Hi, I'm Mike. I am a full stack developer specializing in Node, Tailwind CSS, TypeScript, and MongoDB.
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <Image src="/hero.png" alt="Hero" width={500} height={500}
        />
      </div>
    </div>
  );
}

export default Hero;
