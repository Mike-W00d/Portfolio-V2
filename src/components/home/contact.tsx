import Image from "next/image";

const Contact = () => {
  return (
    <div className="mt-10 flex w-full justify-center gap-10 px-4 ">
      <div className="flex w-full max-w-xl flex-col justify-center rounded-full bg-white p-8 shadow-xl">
        <h1 className="mb-4 text-center text-xl font-bold text-fedblue">
          Quick Links
        </h1>
        <div className="flex w-full items-center justify-between">
          <a href="mailto:mgwood22@sky.com">
            <Image
              src="/email.png"
              alt="Email logo and Link to email me"
              width={50}
              height={50}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </a>
          <a href="https://github.com/Mike-W00d">
            <Image
              src="/github.png"
              alt="Github logo and Link to my GitHub"
              width={40}
              height={40}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/mike-wood22/">
            <Image
              src="/linkedin.png"
              alt="LinkedIn logo and Link to my LinkedIn"
              width={40}
              height={40}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/michael_w00d/">
            <Image
              src="/insta.png"
              alt="Instagram logo and Link to my Instagram"
              width={40}
              height={40}
              className="hover:scale-110 hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
