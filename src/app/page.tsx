
import CompetencesSection from '@/components/CompetencesSection'
import ProjetsSection from "@/components/ProjetsSection";
import ContactSection from "@/components/ContactSection";
import AccueilSection from '@/components/AccueilSection'
export default function Home() {
  return (
    <div>
      {/* Section Accueil */}
      <section 
        id="accueil"
        className=""
      >
        <AccueilSection />
      </section>

      {/* Section Projets */}
      <section id="projets" className=" ">
        <ProjetsSection />
      </section>

      {/* Section Compétences */}
      <section id="competences" className=" relative w-full">
        <CompetencesSection />
      </section>

      {/* Section Contact */}
      <section id="contact" className="">
        <ContactSection />
      </section>
    </div>
  )
}