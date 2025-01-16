
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
          filter: 'brightness(0.2) sepia(0.2) hue-rotate(10deg) saturate(120%)',
        }}
      />
      <ParticlesBackground />
        <div className="text-center relative z-10 pointer-events-auto content-wrapper">
          <div className="w-[250px] h-[250px] mx-auto mb-6 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20">
            <Image 
              src="/IMG_4138.jpg"
              alt="Votre nom"
              width={250}
              height={250}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl text-white font-bold mb-4" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.95)' }}>
            Bonjour, je suis Mathieu
          </h1>
          <div className="space-y-4 mb-6 max-w-5xl mx-auto">
            <p className="text-2xl text-gray-300 font-medium leading-relaxed" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.95)' }}>
              Développeur Web Junior, En formation chez OpenClassrooms. Depuis le début de mon parcours je me concentre sur les technologies frontend avec un regard porté sur les technologies backend.
            </p>
            <p className="text-2xl text-gray-300 font-medium leading-relaxed" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.95)' }}>
              Toujours curieux et en quête de nouvelles opportunités, je cherche constamment à relever des défis qui me permettront d'enrichir mes compétences et de proposer des projets innovants et fonctionnels.
            </p>
            <p className="text-2xl text-gray-300 font-medium leading-relaxed" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.95)' }}>
              Mon but est de concevoir des expériences utilisateurs fluides et intuitives tout en veillant à la performance et à la sécurité des applications.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/mathieu-arnaud-65a0ab33a/" 
              target="_blank"
              className="bg-custom-brown text-xl text-white px-6 py-3 rounded-lg hover:bg-custom-green-3 transition"
            >
              LinkedIn
            </a>
            <a 
              href="#contact" 
              className="bg-custom-green-3 text-xl text-white px-6 py-3 rounded-lg hover:bg-custom-brown hover:text-white transition"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className=" bg-custom-green">
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