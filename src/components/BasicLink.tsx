import React from "react";

interface LinkInt {
  
    title: string,
    href?: string,
    classNames?: string[]
   
}

const BasicLink:React.FC<LinkInt> = ({title, href, classNames}) => {
  return (
    <a
      href={href}
      className={"btn " + classNames?.join(" ")}
      rel="nofollow"
    >
      {title}
    </a>
  );
};

export default BasicLink;
