import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  height?: number | string;
  width?: number | string;
  count?: number;
}

const Skeleton = ({ height, width, count = 1, ...props }: Props) => {
  props.className = `block h-4 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md ${props.className}`;

  if (height) {
    props.style = { ...props.style, height };
  }

  if (width) {
    props.style = { ...props.style, width };
  }

  const numberArray = [];
  for (let i = 0; i <= count - 1; i++) {
    numberArray.push(i);
  }
  return numberArray.map((_, index) => <div key={index} {...props}></div>);
};

export default Skeleton;
