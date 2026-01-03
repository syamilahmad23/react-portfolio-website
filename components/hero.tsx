import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="beranda" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">Halo Saya</p>
              <h1 className="text-primary font-bold text-2xl mb-4">Syamil Ahmad</h1>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance">UI & UX Designer</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-pretty">
              Saya merupakan Mahasiswa semester 7 Teknik Informatika dengan keahlian dalam UI/UX desain. Berpengalaman dalam Figma, serta memiliki portofolio dalam pembuatan desain UI/UX.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Kemampuan</Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border">
              <Image src="/aku.png" alt="Syamil Ahmad" fill className="object-cover" />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
