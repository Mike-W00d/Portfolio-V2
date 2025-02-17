/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
<<<<<<< HEAD
=======
  transpilePackages: ["next-mdx-remote"],
>>>>>>> 89dbdea (Added Markdown complier and also styled the induvidual post page)
};

export default nextConfig;
