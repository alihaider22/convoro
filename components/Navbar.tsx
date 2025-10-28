"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const defaultLinkClass =
  "text-sm font-medium text-foreground transition-colors";

const navigationItems = [
  { href: "/", label: "Home", className: defaultLinkClass },
  { href: "/companions", label: "Companions", className: defaultLinkClass },
  { href: "/my-journey", label: "My Journey", className: defaultLinkClass },
  { href: "/sign-in", label: "Sign In", className: "btn-signin" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Converso Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </Link>

      {/* Navigation links on the right */}
      <div className="flex items-center gap-6">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          const activeClass = isActive ? "font-semibold" : "";
          const finalClassName =
            item.className === "btn-signin"
              ? item.className
              : `${item.className} ${activeClass}`;

          return (
            <Link key={item.href} href={item.href} className={finalClassName}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
