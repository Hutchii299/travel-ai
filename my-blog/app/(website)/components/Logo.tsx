import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="block py-[0.4rem] sm:py-0">
        <span className="text-xl font-semibold mr-2 sm:mr-32">Logo</span>
      </Link>
    </div>
  );
};

export default Logo;
