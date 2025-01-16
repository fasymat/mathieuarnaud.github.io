'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Initialisation avec la nouvelle clé publique
emailjs.init("YOUR_NEW_PUBLIC_KEY")

export default function ContactSection() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_7hz61tm',  // à remplacer par le nouveau service ID Gmail
        'template_4py7ahi',       // à remplacer par le nouveau template ID
        {
          from_name: nom,
          from_email: email,
          message: message,
          to_name: 'Arnaud Mathieu',
          reply_to: email
        },
        '1LPpDFmknVMi8rgRi'         // à remplacer par la nouvelle clé publique
      )

      setStatus('success')
      setNom('')
      setEmail('')
      setMessage('')
      
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16" id="contact">
      <h2 className="text-5xl font-bold text-center mb-20 text-custom-green-3">Contactez-moi</h2>
      
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nom" className="block mb-2 text-[#D2B48C]">Nom</label>
            <input 
              type="text" 
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-3 py-2 border border-[#D2B48C] rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-3"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-[#D2B48C]">Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#D2B48C] rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-3"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-[#D2B48C]">Message</label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-[#D2B48C] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-custom-green-3"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-custom-green-3 text-white py-3 rounded-lg hover:bg-[#D2B48C] transition-colors duration-300 disabled:opacity-50"
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
          
          {status === 'success' && (
            <p className="mt-4 text-green-600 text-center">Message envoyé avec succès !</p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-600 text-center">Une erreur est survenue. Veuillez réessayer.</p>
          )}
        </form>

        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-4 text-custom-green-3">Mes coordonnées</h3>
          <p className="text-[#D2B48C]">Email: mathieuarnaud@rocketmail.com</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/mathieu-arnaud-65a0ab33a/" 
              target="_blank" 
              className="text-[#D2B48C] hover:text-custom-green-3 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/fasymat" 
              target="_blank" 
              className="text-[#D2B48C] hover:text-custom-green-3 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}