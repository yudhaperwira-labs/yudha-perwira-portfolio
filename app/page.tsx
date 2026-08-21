import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SelectedWork from "@/components/home/SelectedWork";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ExpertisePreview from "@/components/home/ExpertisePreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0a0b0d] text-white">
      <Hero />
      <AboutPreview />
      <SelectedWork />
      <ExperiencePreview />
      <ExpertisePreview />
      <ContactCTA />
    </main>
  );
}
