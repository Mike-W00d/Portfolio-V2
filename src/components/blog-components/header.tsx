import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-honblue">
      <Link
        href="/blog"
        className="my-4 mt-8 flex cursor-pointer items-center text-xl font-thin italic leading-tight tracking-tight hover:underline md:tracking-tighter"
      >
        Back to all posts
      </Link>
    </h2>
  );
};

export default Header;
