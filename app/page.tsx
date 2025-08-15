"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Home, Palette } from "lucide-react"
import { ProjectModal } from "@/components/project-modal"
import { ContactForm } from "@/components/contact-form"
import { SchedulingPopup } from "@/components/scheduling-popup"
import { projects } from "@/lib/projects-data"
import Link from "next/link"

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const closeContactForm = () => {
    setIsContactFormOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background"
      >
        {/* Fixed SVG elements with proper z-index */}
        <div className="absolute inset-0 z-0">
          {/* Animated floating elements - moved to background layer */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-float-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
              <path d="M100,20 Q180,100 100,180 Q20,100 100,20 Z" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>

          <div className="absolute top-40 right-20 w-24 h-24 opacity-15 animate-float-medium">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-spin-slow"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="animate-spin-reverse"
              />
              <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>

          <div className="absolute bottom-32 left-20 w-28 h-28 opacity-10 animate-float-fast">
            <svg viewBox="0 0 120 120" className="w-full h-full text-primary">
              <path d="M60,10 L90,40 L90,80 L60,110 L30,80 L30,40 Z" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>

          {/* Organic flowing lines */}
          <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary animate-draw"
            />
            <path
              d="M0,300 Q400,100 800,300 T1200,300"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-accent animate-draw-delayed"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 animate-fade-in">
                ✨ Award-Winning Interior Design
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Transforming Spaces into{" "}
              <span className="relative inline-block text-primary">
                Stories
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-primary/30"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q150,5 300,15"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="animate-draw-underline"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Explore our unique approach to modern bohemian design that blends traditional touches with contemporary
              elegance, creating spaces that inspire and nurture the soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const portfolioSection = document.getElementById("portfolio")
                  portfolioSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/get-started">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Design Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every space has a story to tell. Our approach combines modern functionality with bohemian soul.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Modern Boho</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blending contemporary clean lines with bohemian warmth and texture for spaces that feel both current and
                timeless.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Natural Elements</h3>
              <p className="text-muted-foreground leading-relaxed">
                Incorporating organic materials, earthy textures, and natural light to create harmonious living
                environments.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Sustainable Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughtful selection of eco-friendly materials and vintage pieces that tell stories while protecting our
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our curated projects that blend tradition with a modern twist. Each space tells a unique
              story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0].src || "/placeholder.svg"}
                    alt={project.images[0].alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.subtitle}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your space? We'd love to hear about your vision and bring it to life with our modern
            bohemian approach.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">Free initial consultation to discuss your vision and needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">Custom design concepts tailored to your lifestyle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Transform</h3>
              <p className="text-muted-foreground">Professional implementation with sustainable materials</p>
            </div>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent"
            onClick={() => setIsSchedulingOpen(true)}
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something beautiful together. Every great design starts with a conversation.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => setIsSchedulingOpen(true)}>
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
      <SchedulingPopup isOpen={isSchedulingOpen} onClose={() => setIsSchedulingOpen(false)} />
    </div>
  )
}
