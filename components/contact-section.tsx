"use client"

import type { FormEvent } from "react"

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Create WhatsApp message
    let message = `Hi, I have a question:\n`
    message += `Name: ${formData.get("name")}\n`
    message += `Course: ${formData.get("course")}\n`
    message += `Message: ${formData.get("message")}`

    // Encode for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.open(`https://wa.me/918591667687?text=${encodedMessage}`, "_blank")

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">Reach out to us for any queries or support</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="clay p-10">
            <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-3 text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-700 font-medium">Course</label>
                <input
                  type="text"
                  name="course"
                  placeholder="e.g., B.Tech, MCA"
                  className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-700 font-medium">WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Your WhatsApp number"
                  className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-700 font-medium">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project requirements"
                  rows={4}
                  className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button type="submit" className="clay-button w-full py-4 text-lg font-medium">
                Send Message
              </button>
            </form>
          </div>

          <div className="clay p-10">
            <h3 className="text-xl font-semibold mb-6">Direct Contact Options</h3>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="clay p-4 rounded-full mr-5">
                  <i className="bi bi-whatsapp text-green-500 text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a
                    href="https://wa.me/918591667687"
                    className="text-xl font-medium hover:text-primary transition-colors"
                  >
                    +91 85916 67687
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="clay p-4 rounded-full mr-5">
                  <i className="bi bi-envelope text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:info@techprojectshub.com"
                    className="text-xl font-medium hover:text-primary transition-colors"
                  >
                    info@techprojectshub.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="clay p-4 rounded-full mr-5">
                  <i className="bi bi-clock text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p className="text-xl font-medium">Mon-Sat: 9am - 8pm IST</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium mb-5">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="clay p-3 rounded-full text-blue-600 hover:scale-110 transition-transform">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="clay p-3 rounded-full text-pink-600 hover:scale-110 transition-transform">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohan-deshmukh-56b4a9294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="clay p-3 rounded-full text-blue-700 hover:scale-110 transition-transform"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="clay p-3 rounded-full text-red-600 hover:scale-110 transition-transform">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
