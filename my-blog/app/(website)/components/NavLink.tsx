import Link from "next/link";

import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
}

const NavLink = ({ label, href, ...props }: Props) => {
  props.className =
    "block py-3 hover:underline underline-offset-8 decoration-wavy text-lg font-semibold " +
    props.className;
  return (
    <Link {...props} href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
