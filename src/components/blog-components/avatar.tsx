import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="mr-4 size-12 rounded-full"
        alt={name}
        height={30}
        width={30}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
