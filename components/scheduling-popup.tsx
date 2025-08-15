"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Calendar } from "lucide-react"

interface SchedulingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function SchedulingPopup({ isOpen, onClose }: SchedulingPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Scheduling form submitted:", formData)
    alert("Thank you! We'll confirm your consultation appointment within 24 hours.")
    onClose()
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      consultationType: "",
      message: "",
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">Schedule Your Consultation</h2>
            <p className="text-muted-foreground">Let's discuss your design vision</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2"
                placeholder="Your full name"
              />
            </div>
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
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-base font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-2"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate" className="text-base font-medium">
                Preferred Date *
              </Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                className="mt-2"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <Label htmlFor="preferredTime" className="text-base font-medium">
                Preferred Time *
              </Label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="consultationType" className="text-base font-medium">
              Consultation Type *
            </Label>
            <select
              id="consultationType"
              name="consultationType"
              value={formData.consultationType}
              onChange={handleInputChange}
              required
              className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select consultation type</option>
              <option value="in-person">In-Person Visit</option>
              <option value="virtual">Virtual Meeting</option>
              <option value="phone">Phone Consultation</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-base font-medium">
              Tell us about your project
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="mt-2"
              placeholder="Describe your space, style preferences, and what you'd like to achieve..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Free 30-minute consultation • We'll confirm your appointment within 24 hours
          </p>
        </form>
      </div>
    </div>
  )
}
