"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img src="/mijnchatbot_logo.svg" alt="mijnchatbot" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#comparison" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Vergelijking
            </a>
            <Link href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Blog
            </Link>
            <a href="#testimonials" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#2ECC71] hover:bg-[#27AE60] text-white">
              <Link href="/vergelijking">Start Vergelijking</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#comparison" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
                Vergelijking
              </a>
              <Link href="/blog" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
                Blog
              </Link>
              <a href="#testimonials" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#2ECC71] transition-colors">
                Contact
              </a>
              <Button asChild className="bg-[#2ECC71] hover:bg-[#27AE60] text-white w-full">
                <Link href="/vergelijking">Start Vergelijking</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}