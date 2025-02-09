import { ReactNode } from "react";

import Header from "./header";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <div className="flex justify-between">
      <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter text-fedblue md:text-left md:text-7xl md:leading-none lg:text-8xl">
        {children}
      </h1>
      <Header />
    </div>
  );
}
