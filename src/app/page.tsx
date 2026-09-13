import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div id="top">
      <a href="#work" className="skip-link">
        Skip to portfolio
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
