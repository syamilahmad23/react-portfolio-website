import { Award, Trophy, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const achievements = [
    {
      icon: Award,
      title: "Freelance",
      description: "Mendesain posting, feed  dan story instagram promosi untuk klien, termasuk bisnis lokal dan startup.",
    },
    {
      icon: Trophy,
      title: "Juara 1",
      description: "Juara 1 lomba inovasi bisnis milad UMBandung. Mendesain ui/ux antar muka produk digital.",
    },
    {
      icon: Medal,
      title: "Juara 2",
      description: "Juara 2 lomba ui/ux pada KOMFESIF UMBandung. Mendesain ui/ux antar muka produk digital.",
    },
    {
      icon: Medal,
      title: "Juara 3",
      description: "Juara 3 lomba re-desain aplikasi Topindoku yang diadakan oleh KOMFESIF UMBandung.",
    },
  ]

  return (
    <section id="pengalaman" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pengalaman dan Prestasi</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Sebagai pemenang beberapa kompetisi UI/UX, saya telah membuktikan kemampuan dalam menciptakan desain yang inovatif dan fungsional. Pengalaman ini mengasah kreativitas serta kemampuan memahami kebutuhan pengguna dengan cepat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
