"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import { ProjectModal } from "@/components/project-modal"
import { projects, type Project } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects

    const query = searchQuery.toLowerCase()
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.details.style.toLowerCase().includes(query) ||
        project.details.location.toLowerCase().includes(query),
    )
  }, [searchQuery])

  const openProject = (project: Project) => {
    console.log("[v0] Opening project:", project.title)
    console.log("[v0] Project data:", project)
    setSelectedProject(project)
    setIsModalOpen(true)
    console.log("[v0] Modal state set to open")
  }

  const closeModal = () => {
    console.log("[v0] Closing modal")
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our complete collection of modern bohemian interior design projects. Each space tells a unique story
            of transformation and style.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-muted-foreground">
              {searchQuery
                ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""} matching "${searchQuery}"`
                : `Showing all ${projects.length} projects`}
            </p>

            <div className="max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by style, location, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No projects found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    console.log("[v0] Card clicked for project:", project.title)
                    openProject(project)
                  }}
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{project.title}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.details.style}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>{project.details.location}</span>
                      <span>{project.details.year}</span>
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>View Project</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
