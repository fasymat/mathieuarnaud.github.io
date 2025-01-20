'use client'
import Image from 'next/image'
import { AuroraBackground } from './ui/aurora-background'

export default function AccueilSection() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="w-full md:w-1/2 p-4 md:p-12 flex items-center justify-center">
        <div className="max-w-2xl bg-[#F0F0F0] min-h-[50vh] rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-black">
            Développeur Web Junior
          </h1>
          <div className="space-y-4 md:space-y-8">
            <p className="text-lg md:text-xl text-gray-700">
              Développeur Web Junior, Depuis le début de mon parcours je me concentre sur les technologies frontend avec un regard porté sur les technologies backend.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Toujours curieux et en quête de nouvelles opportunités, je cherche constamment à relever des défis qui me permettront d'enrichir mes compétences et de proposer des projets innovants et fonctionnels.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Mon but est de concevoir des expériences utilisateurs fluides et intuitives tout en veillant à la performance et à la sécurité des applications.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10 md:mt-20 justify-center">
            <a 
              href="/CV.pdf" 
              download 
              className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-500 text-center"
            >
              Télécharger CV
            </a>
            <a 
              href="#contact" 
              className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-500 text-center"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </div>

      {/* Right side with background and photo */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <AuroraBackground>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] overflow-hidden">
            </div>
          </div>
        </AuroraBackground>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full overflow-hidden">
            <Image 
              src="/IMG_4138.jpg"
              alt="Mathieu Arnaud"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}