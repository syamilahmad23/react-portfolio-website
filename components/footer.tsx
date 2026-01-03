import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Projek", href: "#projek" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
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
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 <span className="font-semibold">syamilsarmadd</span> All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
