"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Access the current route

  // Function to check if the link is active
  const isActive = (path: string) => {
    return pathname === path ? "font-extrabold underline" : "";
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Company name on the left */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Adam Hilali
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Navigation links - desktop */}
        <nav className="hidden md:flex md:items-center md:gap-6 ml-auto">
          <Link
            href="/"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/')}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/projects')}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </nav>

        {/* Navigation links - mobile */}
        <nav
          className={cn(
            "absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-md md:hidden",
            isMenuOpen ? "flex flex-col gap-4" : "hidden"
          )}
        >
          <Link
            href="/"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/projects')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium text-gray-800 transition-colors hover:text-primary ${isActive('/contact')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
