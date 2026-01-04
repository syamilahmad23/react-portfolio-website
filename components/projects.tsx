"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Semua")

  const filters = ["Semua", "UI/UX", "Web Design", "App Design", "Graphic Design"]

  const projects = [
    {
      title: "Desain Aplikasi Kasir Coffee Shop",
      category: "Web Design",
      image: "/gesa.png",
    },
    {
      title: "Desain Aplikasi E-Commerce UMKM",
      category: "UI/UX",
      image: "/kalori.png",
    },
    {
      title: "Desain Grafis Poster",
      category: "Graphic Design",
      image: "/poster.png",
    },
    {
      title: " Desain Konten Media Sosial",
      category: "Graphic Design",
      image: "/medsos.png",
    },
        {
      title: "Desain Materi Promosi Fisik",
      category: "Graphic Design",
      image: "/promosi.png",
    },
        {
      title: "Tipografi Ekspresif",
      category: "Graphic Design",
      image: "/typo.png",
    },
  ]

  const filteredProjects =
    activeFilter === "Semua" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projek" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projek Saya</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
            Saya memiliki pengalaman dalam berbagai projek, terutama di bidang UI/UX, Web Design, App Design, dan
            Graphic Design.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-secondary"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/4] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-balance">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
