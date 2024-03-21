import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-0">
      {/* Text box */}
      <div className="lg:w-1/2 w-full text-center lg:text-left bg-white shadow-xl rounded-lg p-6 flex justify-center items-center">
        <span className='font-bold text-center'>
          <h1 className='text-xl text-honblue px-3'> Hello, I'm</h1> 
          <h2 className='text-4xl font-extrabold text-fedblue px-3'> Michael Wood</h2>
          <h3 className='text-xl text-honblue px-3'>I am a Full Stack Developer specializing in Node, Tailwind CSS, TypeScript, Next.js and MongoDB.</h3>
        </span> 
      </div>
      <a href='https://github.com/Mike-W00d'>
      <Image src='/github.png'
        alt='Github logo' 
        width={40}
        height={40}
        /> 
        </a>
        <Button className='bg-fedblue hover:bg-honblue'>Download CV</Button>
      {/* Image */}
      <div className="lg:w-1/2 w-full textå-center relative flex justify-center items-center">
        <Image src="/hero.png" alt="Hero" width={450} height={550} className="rounded-full" /> 
      </div>
    </div>
  );
}

export default Hero;