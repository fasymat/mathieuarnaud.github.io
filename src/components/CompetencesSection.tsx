'use client'
import Image from 'next/image'

export default function CompetencesSection() {
  const technos = [
    { 
      nom: 'React', 
      niveau: 'Avancé', 
      couleur: 'bg-[#61DAFB]',
      logo: '/logos/react.svg'
    },
    { 
      nom: 'Next.js', 
      niveau: 'Avancé', 
      couleur: 'bg-black',
      logo: '/logos/nextjs.svg'
    },
    { 
      nom: 'TypeScript', 
      niveau: 'Intermédiaire', 
      couleur: 'bg-[#3178C6]',
      logo: '/logos/typescript.svg'
    },
    { 
      nom: 'JavaScript', 
      niveau: 'Intermédiaire', 
      couleur: 'bg-[#F7DF1E]',
      logo: '/logos/javascript.svg'
    },
    {
      nom: 'MongoDB',
      niveau: 'Intermédiaire',
      couleur: 'bg-[#00ED64]',
      logo: '/logos/mongodb.svg'
    },
    {
      nom: 'Node.js',
      niveau: 'Intermédiaire',
      couleur: 'bg-[#339933]',
      logo: '/logos/nodejs.svg'
    },
    { 
      nom: 'Tailwind CSS', 
      niveau: 'Avancé', 
      couleur: 'bg-[#38B2AC]',
      logo: '/logos/tailwind.svg'
    },
    {
      nom: 'CSS',
      niveau: 'Avancé',
      couleur: 'bg-[#1572B6]',
      logo: '/logos/css.svg'
    },
    {
      nom: 'HTML',
      niveau: 'Avancé',
      couleur: 'bg-[#E34F26]',
      logo: '/logos/html.svg'
    },
   
  ]

  return (
    <section id="competences" className="w-full">
      <div className="w-full px-10 bg-gradient-to-b from-transparent via-custom-green-3/5 to-transparent">
        <div className="container mx-auto py-16">
          <h2 className="text-5xl font-bold text-center mb-20 text-custom-brown">Mes Compétences</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technos.map((techno, index) => (
              <div 
                key={index} 
                className="bg-[#D2B48C] shadow-md rounded-lg p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`h-2 ${techno.couleur} rounded-full mb-4 hover:h-3 transition-all duration-300`}></div>
                <div className="flex items-center gap-3">
                  <Image 
                    src={techno.logo}
                    alt={`Logo ${techno.nom}`}
                    width={30}
                    height={30}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <h3 className="text-3xl text-white font-semibold">{techno.nom}</h3>
                </div>
                <p className="text-white text-lg italic mt-2">{techno.niveau}</p> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}