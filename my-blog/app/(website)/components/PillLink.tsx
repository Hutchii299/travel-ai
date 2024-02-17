import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const PillLink = ({ label, href }: Props) => {
  return (
    <Link
      href={href}
      className="border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 dark:bg-blue-600 dark:text-white dark:hover:text-white dark:border-0 dark:hover:bg-blue-500 py-2 px-4 rounded-full leading-none"
    >
      {label}
    </Link>
  );
};

export default PillLink;
