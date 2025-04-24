"use client"

import type { FormEvent } from "react"

export default function CustomProjectForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Create WhatsApp message
    let message = `Hi, I'm interested in a custom project:\n`
    message += `Project: ${formData.get("projectTitle")}\n`
    message += `Technology: ${formData.get("technology")}\n`
    message += `Course: ${formData.get("course")}\n`
    message += `Description: ${formData.get("description")}`

    // Encode for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.open(`https://wa.me/918591667687?text=${encodedMessage}`, "_blank")

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="custom" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Submit Your Custom Project</h2>
        <p className="text-center text-gray-600 mb-12">Tell us your requirements and get a personalized solution</p>
        <form className="clay p-10" id="customProjectForm" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block mb-3 text-gray-700 font-medium">Project Title</label>
            <input
              type="text"
              name="projectTitle"
              placeholder="Enter your project title"
              className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-3 text-gray-700 font-medium">Technology Preferred</label>
            <input
              type="text"
              name="technology"
              placeholder="e.g., Python, Java, IoT, etc."
              className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-3 text-gray-700 font-medium">Course/Branch</label>
            <input
              type="text"
              name="course"
              placeholder="e.g., B.Tech CSE, Diploma ECE"
              className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-3 text-gray-700 font-medium">Your WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              placeholder="Enter your WhatsApp number"
              className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-3 text-gray-700 font-medium">Project Description</label>
            <textarea
              name="description"
              placeholder="Describe your project requirements in detail"
              rows={4}
              className="clay-input w-full p-4 focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button type="submit" className="clay-button w-full py-4 text-lg font-medium">
            Submit Project Request
          </button>
        </form>
      </div>
    </section>
  )
}
