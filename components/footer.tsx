"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  useEffect(() => {
    displayVisitorCount()
  }, [])

  const trackVisitor = () => {
    // Get current count or initialize
    let visitorCount = localStorage.getItem("visitorCount") || "0"
    visitorCount = (Number.parseInt(visitorCount) + 1).toString()

    // Save count
    localStorage.setItem("visitorCount", visitorCount)

    return visitorCount
  }

  const displayVisitorCount = () => {
    // Get current count
    let visitorCount = localStorage.getItem("visitorCount") || "0"

    // If it's a new session, track the visit
    if (!sessionStorage.getItem("visited")) {
      visitorCount = trackVisitor()
      sessionStorage.setItem("visited", "true")
    }

    // Display visitor count
    const visitorCounterElement = document.getElementById("visitorCounter")
    if (visitorCounterElement) {
      visitorCounterElement.innerHTML = `
        <p class="clay inline-block px-4 py-2 rounded-full">
          <span class="font-medium">${visitorCount}</span> visitors have explored our projects
        </p>
      `
    }
  }

  return (
    <footer className="py-14 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-5">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/widecanvas-d0dd4.appspot.com/o/logos%2FPurple%20Blue%20Gradient%20Computer%20Repair%20Logo.jpg?alt=media&token=1be09cef-f564-4c31-a69e-bd22426a59a6"
                alt="ProjectWala Logo"
                width={50}
                height={50}
                className="logo mr-2"
              />
              <h3 className="text-2xl font-bold text-primary">
                Project<span className="text-accent">Wala</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Providing high-quality academic project solutions to students across various disciplines.
            </p>
            <div className="flex space-x-4">
    
              <a href="https://www.instagram.com/project_wala__/profilecard/?igsh=N2FvZ2ZncXE3MWpt" className="clay p-2 text-gray-500 hover:text-primary transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/project-wala-8b6074362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="clay p-2 text-gray-500 hover:text-primary transition-colors"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="clay p-2 text-gray-500 hover:text-primary transition-colors">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#custom" className="text-gray-600 hover:text-primary transition-colors">
                  Custom Project
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="bi bi-whatsapp text-green-500 mr-3 mt-1"></i>
                <a href="https://wa.me/918591667687" className="text-gray-600 hover:text-primary transition-colors">
                  +91 85916 67687/9309276924/8788766225
                </a>
              </li>
              <li className="flex items-start">
                <i className="bi bi-envelope text-gray-500 mr-3 mt-1"></i>
                <span className="text-gray-600">contact.projectwala@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-clock text-gray-500 mr-3 mt-1"></i>
                <span className="text-gray-600">Mon-Sat: 9am - 9pm IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2025 ProjectWala. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              FAQs
            </a>
          </div>
        </div>

        <div id="visitorCounter" className="text-center mt-6 text-gray-500 text-sm">
          {/* Visitor count will be displayed here */}
        </div>
      </div>
    </footer>
  )
}
