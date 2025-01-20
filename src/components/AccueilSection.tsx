'use client'
import Image from 'next/image'
import { AuroraBackground } from './ui/aurora-background'

export default function AccueilSection() {
  return (
    <main className=" relative p-4">
      <AuroraBackground className="absolute inset-0 z-0">
        <div></div>
      </AuroraBackground>
      
      <div className="relative z-10 flex justify-center items-center p-6 sm:p-10">
        <div className="w-32 h-32 sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden">
          <Image
            src="/IMG_4942.jpg"
            alt="Mathieu Arnaud"
            width={300}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto bg-[#f5f5f5]/90 backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-10 text-black">
          Mathieu Arnaud
        </h1>
        <div className="space-y-3 sm:space-y-4 md:space-y-8">
          <p className="text-sm sm:text-base md:text-xl text-gray-700">
            Développeur Web Junior, Depuis le début de mon parcours je me concentre sur les technologies frontend avec un regard porté sur les technologies backend.
          </p>
          <p className="text-sm sm:text-base md:text-xl text-gray-700">
            Toujours curieux et en quête de nouvelles opportunités, je cherche constamment à relever des défis qui me permettront d&apos;enrichir mes compétences et de proposer des projets innovants et fonctionnels.
          </p>
          <p className="text-sm sm:text-base md:text-xl text-gray-700">
            Mon but est de concevoir des expériences utilisateurs fluides et intuitives tout en veillant à la performance et à la sécurité des applications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-10 md:mt-20 justify-center">
          <a
            href="/CV.pdf"
            download
            className="text-xs sm:text-sm md:text-base bg-white text-black border-2 border-black px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-black hover:text-white transition duration-500 text-center"
          >
            Télécharger CV
          </a>
          <a
            href="#contact"
            className="text-xs sm:text-sm md:text-base bg-white text-black border-2 border-black px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-black hover:text-white transition duration-500 text-center"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </main>
  )
}