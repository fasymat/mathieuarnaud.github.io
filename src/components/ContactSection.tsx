'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

// Initialisation avec la nouvelle clé publique
emailjs.init("1LPpDFmknVMi8rgRi")

export default function ContactSection() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!token) {
      setStatus('error')
      return
    }
    
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
          reply_to: email,
          'g-recaptcha-response': token // Ajoutez le token ici
        },
        '1LPpDFmknVMi8rgRi'         // à remplacer par la nouvelle clé publique
      )

      setStatus('success')
      setNom('')
      setEmail('')
      setMessage('')
      setToken(null); // Réinitialiser le token

      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="container sm:pb-10 bg-[#f5f5f5] mx-auto " id="contact">
       <div className="text-center py-10">
        <h2 className="text-3xl md:text-5xl font-extralight text-[#5b5963] tracking-wider uppercase">
        N&apos;hésitez pas à me contacter
        </h2>
        <div className="h-1 w-20 bg-[#5b5963] mx-auto mt-4"></div>
      </div>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nom" className="block mb-2 text-black">Nom</label>
            <input 
              type="text" 
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-3 py-2 border border-[#5b5963] rounded-lg focus:outline-black"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-black">Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#5b5963] rounded-lg focus:outline-black"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-black">Message</label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-[#5b5963] rounded-lg h-32  focus:outline-black"
              required 
            />
          </div>

          <div className="flex justify-center mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={handleCaptchaChange}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'sending' || !token}
            className="group w-full text-black border-black py-3 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 w-full bg-black transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </span>
          </button>
          
          {status === 'success' && (
            <p className="mt-4 text-green-600 text-center">Message envoyé avec succès !</p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-600 text-center">Une erreur est survenue. Veuillez réessayer.</p>
          )}
        </form>

        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-4 text-black">Mes coordonnées</h3>
          <p className="text-[#5b5963]">mathieuarnaud@rocketmail.com</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/mathieu-arnaud-65a0ab33a/" 
              target="_blank" 
              className="text-black hover:text-[#0A66C2] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/fasymat" 
              target="_blank" 
              className="text-black hover:text-[#2DA44E] transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}