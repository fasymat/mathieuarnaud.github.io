
import "./globals.css";
// app/layout.tsx
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";
import { ReactNode } from 'react'

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <Navbar />
        <main className=" container mx-auto"> {/* Espace pour la navbar + container centré */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}