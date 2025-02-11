import "./globals.css";
// app/layout.tsx
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";
import { ReactNode } from 'react'
import CookieBanner from '@/components/CookieBanner';

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="fr">
      <head><script src="https://www.google.com/recaptcha/api.js" async defer></script></head>
      <body className="bg-white text-black">
        <Navbar />
        <main className=" container mx-auto"> {/* Espace pour la navbar + container centré */}
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}