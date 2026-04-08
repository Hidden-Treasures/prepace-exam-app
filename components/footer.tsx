import Link from "next/link";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <footer className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="order-last block text-center text-sm text-gray-600 dark:text-gray-400 md:order-first">
            © {new Date().getFullYear()} HTNexus, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-600 duration-150 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
