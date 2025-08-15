"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Home, Palette, Leaf, MapPin } from "lucide-react"
import Link from "next/link"
import { ProjectModal } from "@/components/project-modal"

const showcaseProjects = [
  {
    id: 1,
    title: "Luxury Penthouse Transformation",
    location: "Manhattan, NYC",
    image: "/modern-boho-living-room.png",
    description: "Complete renovation of a 3,000 sq ft penthouse with panoramic city views",
    features: ["Custom millwork", "Smart home integration", "Sustainable materials", "Art curation"],
    budget: "$150K - $200K",
  },
  {
    id: 2,
    title: "Coastal Villa Redesign",
    location: "Malibu, CA",
    image: "/bohemian-bedroom.png",
    description: "Beachfront property combining modern luxury with bohemian coastal vibes",
    features: ["Ocean-inspired palette", "Natural textures", "Indoor-outdoor living", "Custom furniture"],
    budget: "$100K - $150K",
  },
  {
    id: 3,
    title: "Historic Loft Conversion",
    location: "Brooklyn, NY",
    image: "/boho-dining-room.png",
    description: "Industrial loft transformed into a warm, inviting family home",
    features: ["Exposed brick restoration", "Vintage lighting", "Reclaimed materials", "Open floor plan"],
    budget: "$80K - $120K",
  },
  {
    id: 4,
    title: "Modern Farmhouse Kitchen",
    location: "Austin, TX",
    image: "/modern-boho-kitchen.png",
    description: "Complete kitchen overhaul blending rustic charm with modern functionality",
    features: ["Custom cabinetry", "Professional appliances", "Natural stone counters", "Herb garden"],
    budget: "$60K - $90K",
  },
]

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    description: "",
    inspiration: "",
  })

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openProject = (project: any) => {
    // Convert showcase project to modal format
    const modalProject = {
      ...project,
      subtitle: project.location,
      images: [
        { url: project.image, caption: project.title },
        // Add more images if available
      ],
      details: {
        location: project.location,
        budget: project.budget,
        features: project.features,
        description: project.description,
      },
    }
    setSelectedProject(modalProject)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              ← Back to Home
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Create Your Dream Space
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our portfolio of transformative projects and start your journey toward a beautifully designed
              space that reflects your unique style and personality.
            </p>
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What We're Capable Of</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate residential spaces to large-scale commercial projects, we bring vision to life through
              thoughtful design and meticulous execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {showcaseProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => openProject(project)}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {project.budget}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Full-Service Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your design journey with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Space Planning</h3>
              <p className="text-muted-foreground">Optimizing layouts for functionality, flow, and aesthetic appeal</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Custom Design</h3>
              <p className="text-muted-foreground">Bespoke furniture, lighting, and decor tailored to your vision</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Project Management</h3>
              <p className="text-muted-foreground">Seamless coordination with contractors, vendors, and artisans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Start Your Project</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your vision, and we'll create a personalized proposal for your space transformation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-base font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-base font-medium">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="projectType" className="text-base font-medium">
                  Project Type *
                </Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select project type</option>
                  <option value="residential-full">Full Home Design</option>
                  <option value="residential-room">Single Room Design</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="renovation">Renovation Project</option>
                </select>
              </div>
              <div>
                <Label htmlFor="budget" className="text-base font-medium">
                  Budget Range *
                </Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select budget range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-200k">$100,000 - $200,000</option>
                  <option value="over-200k">Over $200,000</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="timeline" className="text-base font-medium">
                  Desired Timeline
                </Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <Label htmlFor="location" className="text-base font-medium">
                  Project Location *
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-base font-medium">
                Project Description *
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell us about your space, your vision, and what you hope to achieve..."
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="inspiration" className="text-base font-medium">
                Style Inspiration
              </Label>
              <Textarea
                id="inspiration"
                name="inspiration"
                placeholder="Describe your style preferences, colors you love, or share links to inspiration images..."
                value={formData.inspiration}
                onChange={handleInputChange}
                rows={3}
                className="mt-2"
              />
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="text-lg px-12 py-6">
                Submit Project Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll review your inquiry and get back to you within 24 hours with next steps.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  )
}
