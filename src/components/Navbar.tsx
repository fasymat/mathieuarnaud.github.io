// components/Navbar.tsx
'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    const navHeight = 64 // Height of navbar
    if (section) {
      const offsetTop = section.offsetTop - navHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-md h-16">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <div className="text-2xl hover:scale-110 transition-transform duration-200 text-black font-bold">
            Arnaud Mathieu
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white/90 md:bg-transparent backdrop-blur-md p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4 shadow-md md:shadow-none`}>
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-black text-xl hover:scale-125 transition-transform duration-200"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className="text-black text-xl hover:scale-125 transition-transform duration-200"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('competences')}
              className="text-black text-xl hover:scale-125 transition-transform duration-200"
            >
              Compétences
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black text-xl hover:scale-125 transition-transform duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <div className="h-16" /> {/* Spacer to prevent content overlap */}
    </>
  )
} 