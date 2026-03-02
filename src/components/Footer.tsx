import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Featured",
    links: [
      { label: "Air Force 1", href: "/featured/air-force-1" },
      { label: "Huarache", href: "/featured/huarache" },
      { label: "Air Max 90", href: "/featured/air-max-90" },
      { label: "Air Max 95", href: "/featured/air-max-95" },
    ],
  },
  {
    title: "Shoes",
    links: [
      { label: "All Shoes", href: "/shoes" },
      { label: "Custom Shoes", href: "/shoes/custom" },
      { label: "Jordan Shoes", href: "/shoes/jordan" },
      { label: "Running Shoes", href: "/shoes/running" },
    ],
  },
  {
    title: "Clothing",
    links: [
      { label: "All Clothing", href: "/clothing" },
      { label: "Modest Wear", href: "/clothing/modest-wear" },
      { label: "Hoodies & Pullovers", href: "/clothing/hoodies-pullovers" },
      { label: "Shirts & Tops", href: "/clothing/shirts-tops" },
    ],
  },
  {
    title: "Kids'",
    links: [
      { label: "Infant & Toddler Shoes", href: "/kids/infant-toddler" },
      { label: "Kids' Shoes", href: "/kids/shoes" },
      { label: "Kids' Jordan Shoes", href: "/kids/jordan" },
      { label: "Kids' Basketball Shoes", href: "/kids/basketball" },
    ],
  },
];

const socialLinks = [
  { icon: "/x.svg", alt: "X (Twitter)", href: "https://x.com/nike" },
  {
    icon: "/facebook.svg",
    alt: "Facebook",
    href: "https://facebook.com/nike",
  },
  {
    icon: "/instagram.svg",
    alt: "Instagram",
    href: "https://instagram.com/nike",
  },
];

const bottomLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Terms of Sale", href: "/terms-of-sale" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Nike Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1440px] px-6 pt-10 pb-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Nike home">
              <Image
                src="/logo.svg"
                alt="Nike"
                width={80}
                height={29}
                priority
              />
            </Link>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-caption text-light-100 mb-4">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body text-dark-500 hover:text-light-100 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4 lg:items-start">
            {socialLinks.map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-dark-700 hover:bg-dark-500 transition-colors"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={18}
                  height={18}
                  className="invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          {/* Left side: location + copyright */}
          <div className="flex flex-wrap items-center gap-3 text-footnote text-dark-500">
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 0C2.69 0 0 2.69 0 6C0 10.5 6 15 6 15C6 15 12 10.5 12 6C12 2.69 9.31 0 6 0ZM6 8.25C4.76 8.25 3.75 7.24 3.75 6C3.75 4.76 4.76 3.75 6 3.75C7.24 3.75 8.25 4.76 8.25 6C8.25 7.24 7.24 8.25 6 8.25Z"
                  fill="#757575"
                />
              </svg>
              Croatia
            </span>
            <span>&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Right side: legal links */}
          <ul className="flex flex-wrap items-center gap-4 text-footnote text-dark-500">
            {bottomLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-light-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
