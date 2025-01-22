'use client'
import Image from 'next/image'

interface Techno {
  nom: string;
  couleur: string;
  logo: string;
}

export default function CompetencesSection() {
  const technos: Techno[] = [
    { 
      nom: 'React', 
      couleur: '#61DAFB',
      logo: '/logos/react.svg'
    },
    { 
      nom: 'Next.js', 
      couleur: '#000000',
      logo: '/logos/nextjs.svg'
    },
    { 
      nom: 'TypeScript', 
      couleur: '#3178C6',
      logo: '/logos/typescript.svg'
    },
    { 
      nom: 'JavaScript', 
      couleur: '#F7DF1E',
      logo: '/logos/javascript.svg'
    },
    {
      nom: 'MongoDB',
      couleur: '#00ED64',
      logo: '/logos/mongodb.svg'
    },
    {
      nom: 'Node.js',
      couleur: '#339933',
      logo: '/logos/nodejs.svg'
    },
    { 
      nom: 'Tailwind CSS', 
      couleur: '#38B2AC',
      logo: '/logos/tailwind.svg'
    },
    {
      nom: 'CSS',
      couleur: '#1572B6',
      logo: '/logos/css.svg'
    },
    {
      nom: 'HTML',
      couleur: '#E34F26',
      logo: '/logos/html.svg'
    },
  ]

  return (
    <section id="competences" className="relative  bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Côté gauche - Photo */}
        <div className="hidden md:block md:w-1/3 md:h-auto relative">
        <div className="absolute inset-0">
          <Image 
            src="/bg-image2.jpg"
            alt="Compétences illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
  
        {/* Côté droit - Compétences */}
        <div className="w-full md:w-2/3 py-12 md:pt-20 md:pb-32 px-4 md:px-16">
          <div className="text-center mt-6  mb-6 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extralight text-[#5b5963] tracking-wider uppercase">
              Mes Compétences
            </h2>
            <div className="h-1 w-20 bg-[#5b5963] mx-auto mt-6 mb-12"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {technos.map((techno, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <Image 
                  src={techno.logo}
                  alt={`${techno.nom} logo`}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <span className="text-lg md:text-2xl font-light text-gray-700">{techno.nom}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24">
            <h3 className="text-2xl md:text-4xl font-extralight text-[#5b5963] tracking-wider uppercase text-center mb-8">
              Formation
            </h3>
            <div className="flex items-center gap-4 p-6 rounded-lg shadow-md bg-white">
              <Image 
                src="/logos/openclassrooms.png"
                alt="OpenClassrooms logo"
                width={200}
                height={100}
                className=" "
              />
              <div>
                <h4 className="text-xl md:text-2xl font-light text-gray-700">Développeur Web</h4>
                <p className="text-gray-500 font-light">OpenClassrooms  - 2024 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )}