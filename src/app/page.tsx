import { CasesSection } from '@/components/sections/CasesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ValueSection } from '@/components/sections/ValueSection';
import { CinematicLoader } from '@/components/ui/CinematicLoader';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#050816] text-white">
      <CinematicLoader />
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <ValueSection />
      <CasesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
