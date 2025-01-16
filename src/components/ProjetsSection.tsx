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
      titre: "site de location immobilière",
      description: "gestion du front-end ",
      technologies: ["React", "SCSS",],
      githubLink: "https://github.com/fasymat/Kasa-op",
      imageUrl: "/kasa.png"
    },
    {
      titre: "Application de notation de livre",
      description: "gestion de la base de données",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      githubLink: "https://github.com/fasymat/Mon_vieux_grimoire",
      imageUrl: "/Mon_Vieux_Grimoire.png"
    },
    {
      titre: "Portfolio Sophie Bluel",
      description: "devellopement en javascript",
      technologies: ["JavaScript", "CSS",],
      githubLink: "https://github.com/fasymat/sophie_bluel",
      imageUrl: "/Mon_Vieux_Grimoire.png"
    }
    
    
  ]

  return (
    <div className="bg-gradient-to-b from-custom-green-3/5 via-white to-custom-green-3/5 px-10 py-16">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center mb-20 text-custom-green-3">Mes Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projets.map((projet, index) => (
            <div 
              key={index} 
              className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image 
                  src={projet.imageUrl} 
                  alt={projet.titre} 
                  fill
                  className={`${
                    projet.titre === "site de location immobilière" ? "object-cover" : "object-contain"
                  } bg-gray-50`}
                  quality={100}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-custom-green-3">{projet.titre}</h3>
                <p className="text-gray-600 text-lg mb-6">{projet.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {projet.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-custom-brown text-white px-4 py-2 rounded-lg text-2sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={projet.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-custom-green-3 text-white text-xl px-6 py-3 rounded-lg hover:bg-custom-brown transition-colors duration-300 text-center"
                >
                  Voir sur GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}