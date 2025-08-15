"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  story: string
  images: ProjectImage[]
  details: {
    location: string
    size: string
    year: string
    style: string
  }
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">{project.title}</h2>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="bg-orange-100 hover:bg-orange-200 border border-orange-200 hover:border-orange-300 transition-colors"
          >
            <X className="h-6 w-6 stroke-[2.5] text-orange-600" />
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-[16/10] relative overflow-hidden">
            <img
              src={project.images[currentImageIndex].src || "/placeholder.svg"}
              alt={project.images[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            {project.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>

          {/* Image Caption */}
          {project.images[currentImageIndex].caption && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded">
              <p className="text-sm">{project.images[currentImageIndex].caption}</p>
            </div>
          )}

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">{project.details.location}</p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-1">Size</h4>
              <p className="text-muted-foreground text-sm">{project.details.size}</p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-1">Year</h4>
              <p className="text-muted-foreground text-sm">{project.details.year}</p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-1">Style</h4>
              <p className="text-muted-foreground text-sm">{project.details.style}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">About This Project</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Story */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">The Story</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.story}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-6">
            <div className="text-center">
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Inspired by this project?</h4>
              <p className="text-muted-foreground mb-4">Let's create something beautiful for your space too.</p>
              <Button size="lg" className="px-8">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
