import Image from "next/image"

export default function About() {
  const skills = [
    { name: "Social Media Design", level: 90 },
    { name: "Website Design", level: 75 },
    { name: "App Design", level: 85 },
    { name: "Graphic Design", level: 80 },
  ]

  return (
    <section id="tentang" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border">
              <Image src="/aku2.jpg" alt="Tentang Saya" fill className="object-cover" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Terbiasa bekerja dalam tim dan mengelola proyek desain. Siap berkontribusi sebagai UI/UX Designer dengan menggabungkan keterampilan desain dan teknologi.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{skill.name}</p>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-background rounded-full transition-all duration-500"
                      style={{ left: `calc(${skill.level}% - 8px)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
