import ContactHero from "../components/ContactHero";
import ContactGallery from "../components/ContactGallery";
import ContactWhoWeAre from "../components/ContactWhoWeAre";
import ContactProLevel from "../components/ContactProLevel";
import ContactTestimonialVideo from "../components/ContactTestimonialVideo";
import ContactTeam from "../components/ContactTeam";
import ContactPricing from "../components/ContactPricing";
import Footer from "@/app/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="flex flex-col flex-1">
      <ContactHero />
      <ContactGallery />
      <ContactWhoWeAre />
      <ContactProLevel />
      <ContactTestimonialVideo />
      <ContactTeam />
      <ContactPricing />
      <Footer/>
    </main>
  );
}
