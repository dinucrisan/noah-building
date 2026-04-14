import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PropertiesSection from "@/components/PropertiesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import SectionGlow from "@/components/SectionGlow";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionSeparator />
      <SectionGlow>
        <StatsSection />
      </SectionGlow>
      <SectionSeparator />
      <SectionGlow>
        <PropertiesSection />
      </SectionGlow>
      <SectionSeparator />
      <SectionGlow>
        <ProcessSection />
      </SectionGlow>
      <SectionSeparator />
      <SectionGlow>
        <CTASection />
      </SectionGlow>
    </>
  );
}
