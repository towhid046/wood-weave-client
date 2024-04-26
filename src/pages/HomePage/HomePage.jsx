import Hero from "./../../components/Unique/Hero/Hero";
import CraftItems from "./../../components/Unique/CraftItems/CraftItems";
import FAQSection from "./../../components/Unique/FAQSection/FAQSection";
import ContactSection from "./../../components/Unique/ContactSection/ContactSection";
import { useEffect } from "react";
import { scrollToTop } from "../../utilities/scrollToTop";
const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Hero />
      <CraftItems />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
