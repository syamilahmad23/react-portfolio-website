"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Wadhyu Adji",
      role: "Barista Coffee Shop",
      quote:
        "Desain mudah di pahami, Sangat dan jalan. Sangat memenutu untuk operasional coffee shop. diupayakan untuk hakin bekerja kasino customer langsung Sangat dalam.",
      image: "/professional-man-portrait.png",
    },
    {
      name: "Rina Sari",
      role: "Owner UMKM",
      quote:
        "Aplikasi e-commerce yang dibuat sangat membantu usaha saya. Desainnya user-friendly dan mudah digunakan oleh pelanggan. Terima kasih!",
      image: "/professional-woman-portrait.png",
    },
    {
      name: "Budi Santoso",
      role: "Founder Startup",
      quote:
        "Profesional dan tepat waktu. Desain UI/UX yang dibuat sangat sesuai dengan kebutuhan startup kami. Highly recommended!",
      image: "/professional-businessman.png",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimoni" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Klien dan rekan kerja mengapresiasi hasil desain UI/UX saya sebagai inovatif dan praktis. Senang bekerjasama
            hubungan yang menciptakan kualitas pekerjaan saya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-border">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                    <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                      {testimonials[activeIndex].quote}
                    </p>
                    <div>
                      <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
