"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleBlogClick = () => {
    router.push("/blog")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-accent" />
            <span className="font-serif text-xl font-bold text-foreground">Boho Interiors</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <button onClick={handleBlogClick} className="text-foreground hover:text-primary transition-colors">
              Blog
            </button>
            <Link href="/get-started" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/get-started" className="hidden md:inline-flex">
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#portfolio"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <button
                onClick={() => {
                  handleBlogClick()
                  setIsMenuOpen(false)
                }}
                className="text-foreground hover:text-primary transition-colors px-4 py-2 text-left"
              >
                Blog
              </button>
              <Link
                href="/get-started"
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Link href="/get-started" className="block">
                  <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
