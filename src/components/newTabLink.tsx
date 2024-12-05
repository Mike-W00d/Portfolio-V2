import React, { FC, ReactNode } from "react";

interface NewTabLinkProps {
  href: string;
  children: ReactNode;
}

const NewTabLink: FC<NewTabLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default NewTabLink;
