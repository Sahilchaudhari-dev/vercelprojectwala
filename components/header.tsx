"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target as Node) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-white fixed w-full z-50 clay">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/widecanvas-d0dd4.appspot.com/o/logos%2FPurple%20Blue%20Gradient%20Computer%20Repair%20Logo.jpg?alt=media&token=1be09cef-f564-4c31-a69e-bd22426a59a6"
            alt="ProjectWala Logo"
            width={50}
            height={50}
            className="logo mr-2"
          />
          <h1 className="text-2xl font-bold text-primary">
            Project<span className="text-accent">Wala</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:text-primary transition font-medium">
            Home
          </Link>
          <Link href="#services" className="hover:text-primary transition font-medium">
            Services
          </Link>
          <Link href="#projects" className="hover:text-primary transition font-medium">
            Projects
          </Link>
          <Link href="#custom" className="hover:text-primary transition font-medium">
            Custom Project
          </Link>
          <Link href="#reviews" className="hover:text-primary transition font-medium">
            Reviews
          </Link>
          <Link href="#contact" className="hover:text-primary transition font-medium">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ref={menuToggleRef}
        >
          <i className="bi bi-list"></i>
        </button>
      </nav>
      <div
        ref={mobileMenuRef}
        className={`mobile-menu absolute w-full px-4 py-4 top-full left-0 ${mobileMenuOpen ? "" : "hidden"}`}
      >
        <div className="flex flex-col space-y-4">
          <Link href="#" className="hover:text-primary transition px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="#services"
            className="hover:text-primary transition px-2 py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition px-2 py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#custom"
            className="hover:text-primary transition px-2 py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Custom Project
          </Link>
          <Link
            href="#reviews"
            className="hover:text-primary transition px-2 py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition px-2 py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
