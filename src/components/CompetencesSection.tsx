'use client'
import Image from 'next/image'

export default function CompetencesSection() {
  const technos = [
    { 
      nom: 'React', 
      niveau: 80,
      couleur: '#61DAFB',
      logo: '/logos/react.svg'
    },
    { 
      nom: 'Next.js', 
      niveau: 80,
      couleur: '#000000',
      logo: '/logos/nextjs.svg'
    },
    { 
      nom: 'TypeScript', 
      niveau: 70,
      couleur: '#3178C6',
      logo: '/logos/typescript.svg'
    },
    { 
      nom: 'JavaScript', 
      niveau: 70,
      couleur: '#F7DF1E',
      logo: '/logos/javascript.svg'
    },
    {
      nom: 'MongoDB',
      niveau: 50,
      couleur: '#00ED64',
      logo: '/logos/mongodb.svg'
    },
    {
      nom: 'Node.js',
      niveau: 50,
      couleur: '#339933',
      logo: '/logos/nodejs.svg'
    },
    { 
      nom: 'Tailwind CSS', 
      niveau: 95,
      couleur: '#38B2AC',
      logo: '/logos/tailwind.svg'
    },
    {
      nom: 'CSS',
      niveau: 95,
      couleur: '#1572B6',
      logo: '/logos/css.svg'
    },
    {
      nom: 'HTML',
      niveau: 95,
      couleur: '#E34F26',
      logo: '/logos/html.svg'
    },
  ]

  return (
    <section id="competences" className="relative bg-white">
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
        <div className="w-full md:w-2/3 py-6 md:py-10 px-4 md:px-16">
          <div className="text-center mt-6 md:mt-10 mb-6 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-extralight text-[#5b5963] tracking-wider uppercase">
              Mes Compétences
            </h2>
            <div className="h-1 w-20 bg-[#5b5963] mx-auto mt-4"></div>
          </div>
          <div className="space-y-4 md:space-y-6">
            {technos.map((techno, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Image 
                      src={techno.logo}
                      alt={`${techno.nom} logo`}
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-lg md:text-xl font-light text-gray-700">{techno.nom}</span>
                  </div>
                  <span className="text-xs md:text-sm font-light text-gray-500">{techno.niveau}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500 ease-out group-hover:opacity-80"
                    style={{ 
                      width: `${techno.niveau}%`,
                      backgroundColor: techno.couleur
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )}