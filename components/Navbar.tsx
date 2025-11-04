"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const defaultLinkClass =
  "text-sm font-medium text-foreground hover:text-primary transition-colors";

const navigationItems = [
  { href: "/", label: "Home", className: defaultLinkClass },
  { href: "/companions", label: "Companions", className: defaultLinkClass },
  { href: "/my-journey", label: "My Journey", className: defaultLinkClass },
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
          const activeClass = isActive ? "text-primary font-semibold" : "";
          const finalClassName = `${item.className} ${activeClass}`;

          return (
            <Link key={item.href} href={item.href} className={finalClassName}>
              {item.label}
            </Link>
          );
        })}
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
