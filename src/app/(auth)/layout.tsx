import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left panel – brand side */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between bg-dark-900 text-light-100 p-10">
        {/* Logo */}
        <Link href="/" aria-label="Nike home">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={50}
            height={18}
            className="text-orange"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(55%) sepia(63%) saturate(600%) hue-rotate(10deg) brightness(95%) contrast(90%)",
            }}
            priority
          />
        </Link>

        {/* Tagline */}
        <div className="max-w-sm">
          <h2 className="text-heading-2 mb-4">Just Do It</h2>
          <p className="text-body text-dark-500">
            Join millions of athletes and fitness enthusiasts who trust Nike for
            their performance needs.
          </p>

          {/* Carousel dots */}
          <div className="mt-8 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange" />
            <span className="h-2.5 w-2.5 rounded-full bg-dark-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-dark-700" />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-footnote text-dark-700">
          &copy; {new Date().getFullYear()} Nike. All rights reserved.
        </p>
      </div>

      {/* Right panel – form side */}
      <div className="flex w-full flex-1 flex-col items-center justify-center px-6 py-10 lg:w-1/2 lg:px-16">
        {/* Mobile logo */}
        <div className="mb-8 lg:hidden">
          <Link href="/" aria-label="Nike home">
            <Image
              src="/logo.svg"
              alt="Nike"
              width={60}
              height={22}
              className="invert"
              priority
            />
          </Link>
        </div>

        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
