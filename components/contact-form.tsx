"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Send } from "lucide-react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    propertyType: "",
    roomsToDesign: [] as string[],
    currentStyle: "",
    desiredStyle: "",
    inspiration: "",
    challenges: "",
    lifestyle: "",
    priorities: [] as string[],
    hasChildren: false,
    hasPets: false,
    entertainsOften: false,
    worksFromHome: false,
    additionalInfo: "",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your inquiry! We'll be in touch within 24 hours.")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">Start Your Design Journey</h2>
            <p className="text-muted-foreground">
              Tell us about your vision and we'll create something beautiful together
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => handleInputChange("projectType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-home">Full Home Design</SelectItem>
                      <SelectItem value="single-room">Single Room</SelectItem>
                      <SelectItem value="multiple-rooms">Multiple Rooms</SelectItem>
                      <SelectItem value="consultation">Design Consultation</SelectItem>
                      <SelectItem value="renovation">Renovation Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                      <SelectItem value="over-200k">Over $200,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleInputChange("propertyType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="loft">Loft</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Rooms to Design */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Rooms to Design</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Living Room",
                  "Kitchen",
                  "Dining Room",
                  "Master Bedroom",
                  "Guest Bedroom",
                  "Home Office",
                  "Bathroom",
                  "Entryway",
                  "Outdoor Space",
                ].map((room) => (
                  <div key={room} className="flex items-center space-x-2">
                    <Checkbox
                      id={room}
                      checked={formData.roomsToDesign.includes(room)}
                      onCheckedChange={(checked) => handleArrayChange("roomsToDesign", room, checked as boolean)}
                    />
                    <Label htmlFor={room} className="text-sm">
                      {room}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style Preferences */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Style Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentStyle">Current Style</Label>
                  <Input
                    id="currentStyle"
                    value={formData.currentStyle}
                    onChange={(e) => handleInputChange("currentStyle", e.target.value)}
                    placeholder="e.g., Traditional, Modern, Eclectic"
                  />
                </div>
                <div>
                  <Label htmlFor="desiredStyle">Desired Style</Label>
                  <Input
                    id="desiredStyle"
                    value={formData.desiredStyle}
                    onChange={(e) => handleInputChange("desiredStyle", e.target.value)}
                    placeholder="e.g., Modern Boho, Minimalist, Rustic"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="inspiration">What inspires you?</Label>
                <Textarea
                  id="inspiration"
                  value={formData.inspiration}
                  onChange={(e) => handleInputChange("inspiration", e.target.value)}
                  placeholder="Tell us about colors, textures, or spaces that inspire you..."
                  rows={3}
                />
              </div>
            </div>

            {/* Lifestyle Information */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Lifestyle & Needs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasChildren"
                      checked={formData.hasChildren}
                      onCheckedChange={(checked) => handleInputChange("hasChildren", checked as boolean)}
                    />
                    <Label htmlFor="hasChildren">I have children</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasPets"
                      checked={formData.hasPets}
                      onCheckedChange={(checked) => handleInputChange("hasPets", checked as boolean)}
                    />
                    <Label htmlFor="hasPets">I have pets</Label>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="entertainsOften"
                      checked={formData.entertainsOften}
                      onCheckedChange={(checked) => handleInputChange("entertainsOften", checked as boolean)}
                    />
                    <Label htmlFor="entertainsOften">I entertain frequently</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="worksFromHome"
                      checked={formData.worksFromHome}
                      onCheckedChange={(checked) => handleInputChange("worksFromHome", checked as boolean)}
                    />
                    <Label htmlFor="worksFromHome">I work from home</Label>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="challenges">Current Challenges</Label>
                <Textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => handleInputChange("challenges", e.target.value)}
                  placeholder="What challenges are you facing with your current space?"
                  rows={3}
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Additional Information</h3>
              <div>
                <Label htmlFor="additionalInfo">Anything else you'd like us to know?</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  placeholder="Share any additional details, special requirements, or questions..."
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="px-8">
                Send Inquiry
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
