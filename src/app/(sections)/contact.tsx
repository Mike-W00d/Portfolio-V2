import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex mt-10 w-full justify-center gap-10 px-4 ">
      <div className="flex flex-col justify-center bg-white shadow-xl rounded-full p-8 w-full max-w-xl">
        <h1 className="text-xl font-bold text-fedblue text-center mb-4">
          Quick Links
        </h1>
        <div className="w-full flex justify-between items-center">
          <a href="mailto:mgwood22@sky.com">
            <Image
              src="/email.png"
              alt="Email logo and Link to email me"
              width={50}
              height={50}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
          <a href="https://github.com/Mike-W00d">
            <Image
              src="/github.png"
              alt="Github logo and Link to my GitHub"
              width={40}
              height={40}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/mike-wood22/">
            <Image
              src="/linkedin.png"
              alt="LinkedIn logo and Link to my LinkedIn"
              width={40}
              height={40}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
          <a href="https://www.instagram.com/michael_w00d/">
            <Image
              src="/insta.png"
              alt="Instagram logo and Link to my Instagram"
              width={40}
              height={40}
              className="hover:cursor-pointer hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
