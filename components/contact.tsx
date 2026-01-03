"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

  return (
    <section id="kontak" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kuy Mendesain Bersamaku</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
            Jangan ragu untuk menghubungi kami dan mulai pengalaman mendesain yang kuat bersama
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="syamilahmad606@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
              Hubungi Saya
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
