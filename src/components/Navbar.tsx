// components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 
      bg-custom-green-3
      backdrop-blur-md 
      shadow-md 
      transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl hover:scale-110 transition-transform duration-200 text-white font-bold">Arnaud Mathieu</div>
        <div className="space-x-4">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-white text-xl hover:scale-125 transition-transform duration-200"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('projets')}
            className="text-white text-xl hover:scale-125 transition-transform duration-200"
          >
            Projets
          </button>
          <button 
            onClick={() => scrollToSection('competences')}
            className="text-white text-xl hover:scale-125 transition-transform duration-200"
          >
            Compétences
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white text-xl hover:scale-125 transition-transform duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}