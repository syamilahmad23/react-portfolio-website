"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Projek", href: "#projek" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="1.png"
            alt="Syamilsari Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl">
            SYAMILSARMADD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          Hubungi Saya
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">Hubungi Saya</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
