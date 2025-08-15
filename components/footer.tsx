"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterFeedback, setNewsletterFeedback] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterFeedback("Thank you! Please check your email to verify your subscription.")
      setNewsletterEmail("")
      setTimeout(() => setNewsletterFeedback(""), 5000)
    }
  }

  return (
    <footer className="bg-secondary/20 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-accent" />
              <span className="font-serif text-xl font-bold text-foreground">Boho Interiors</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming spaces into stories through modern bohemian design. We blend traditional craftsmanship with
              contemporary living to create homes that reflect your unique journey.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@bohointeriors.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span>
                  123 Design Street
                  <br />
                  Creative District, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-border bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Stay Inspired</h3>
              <p className="text-muted-foreground">Get design tips and project updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          {newsletterFeedback && (
            <div className="mt-4 text-center">
              <p className="text-sm text-primary bg-primary/10 px-4 py-2 rounded-lg inline-block">
                {newsletterFeedback}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Boho Interiors. All rights reserved. Crafted with love and sustainable materials.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
