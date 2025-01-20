'use client'
import Image from 'next/image'

interface Projet {
  titre: string
  description: string
  technologies: string[]
  githubLink: string
  imageUrl: string
}

export default function ProjetsSection() {
  const projets: Projet[] = [
    {
      titre: "Application de notation de livre",
      description: "Développer le systéme de notation de livre et de connexion,création de compte",
      technologies: ["Express", "Node.js", "MongoDB"],
      githubLink: "https://github.com/fasymat/Mon_vieux_grimoire",
      imageUrl: "/Logo.png"
    },
    {
      titre: "site de location immobilière",
      description: "Développement du site en suivant les instructions de la maquette figma",
      technologies: ["React", "SCSS"],
      githubLink: "https://github.com/fasymat/Kasa-op",
      imageUrl: "/kasa.png"
    },    
    {
      titre: "Portfolio Sophie Bluel",
      description: "Faire le lien avec la base de données des projets, developper la page de connexion. Ajouts et suppression de projets",
      technologies: ["JavaScript", "CSS"],
      githubLink: "https://github.com/fasymat/sophie_bluel",
      imageUrl: "/Sophie-bluel.png"
    }
  ]

  return (
    <section className="bg-[#f5f5f5]  sm:p-20">
      <div className="text-center mb-10 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#5b5963] tracking-wider uppercase">
          Mes Travaux
        </h2>
        <div className="h-1 w-20 bg-[#5b5963] mx-auto mt-4"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="w-full sm:w-[600px]">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="relative w-full h-[150px] sm:h-[200px] bg-gray-100 flex items-center justify-center">
                <div className={`relative ${projet.imageUrl === '/Sophie-bluel.png' || projet.imageUrl === '/Logo.png' ? 'w-[50%] h-[50%]' : 'w-[80%] h-[80%]'}`}>
                  <Image
                    src={projet.imageUrl}
                    alt={projet.titre}
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    quality={100}
                    className="object-contain "
                    priority={index === 0}
                  />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-black">{projet.titre}</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs sm:text-sm bg-white border border-[#5b5963] text-[#5b5963] px-2 sm:px-3 py-1 hover:bg-black hover:text-white transition duration-500 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
    href={projet.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-black border text-white px-6 py-3 rounded-lg hover:border-black hover:bg-white hover:text-black transition duration-500"
  >
    Voir sur GitHub
  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
  };