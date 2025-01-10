// app/page.tsx
import Image from 'next/image'
import CompetencesSection from '@/components/CompetencesSection'
import ProjetsSection from "@/components/ProjetsSection";
import ContactSection from "@/components/ContactSection";
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <div>
      {/* Section Accueil */}
      <section 
        id="accueil" 
        className="min-h-screen relative flex items-center justify-center"
      >
         <Image 
        src="/bg-image.jpg"
        alt="Background"
        fill
        priority
        quality={100}
        style={{
          objectFit: 'cover',
          zIndex: -2,
          filter: 'brightness(0.4) sepia(0.2) hue-rotate(10deg) saturate(120%)',
        }}
      />
      <ParticlesBackground />
        <div className="text-center relative z-10 pointer-events-auto content-wrapper">
          <Image 
            src="/photo-profil.jpg"
            alt="Votre nom"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl text-white font-bold mb-4">
            Bonjour, je suis Mathieu
          </h1>
          <p className="text-2xl mb-6 text-white ">
            Développeur Web Junior | Passionné de technologies Front-end
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/CV.pdf" 
              download 
              className="bg-custom-brown text-white px-6 py-3 rounded-lg hover:bg-custom-green-3 transition"
            >
              Télécharger CV
            </a>
            <a 
              href="#contact" 
              className="bg-custom-green-3 text-white px-6 py-3 rounded-lg hover:bg-custom-brown hover:text-white transition"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-16 bg-custom-green">
        <ProjetsSection />
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-16 bg-custom-gray relative w-full">
        <CompetencesSection />
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16">
        <ContactSection />
      </section>
    </div>
  )
}