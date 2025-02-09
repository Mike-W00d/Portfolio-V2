import Link from "next/link";

const Header = () => {
  return (
    <Link href="/blog" className="my-4 flex cursor-pointer hover:underline">
      <h2 className="text-xl text-honblue">Back to all posts</h2>
    </Link>
  );
};

export default Header;
