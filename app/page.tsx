import Hero from "@/components/home/Hero";
import AdventureMapSection from "@/components/home/AdventureMapSection";
import FeaturedResources from "@/components/home/FeaturedResources";
import MembershipCTA from "@/components/home/MembershipCTA";
import TeacherSection from "@/components/home/TeacherSection";
import ParentSection from "@/components/home/ParentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AdventureMapSection />
      <FeaturedResources />
      <MembershipCTA />
      <TeacherSection />
      <ParentSection />
    </>
  );
}
