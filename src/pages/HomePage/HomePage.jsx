import Hero from "./../../components/Unique/Hero/Hero";
import CraftItems from "./../../components/Unique/CraftItems/CraftItems";
import FAQSection from "./../../components/Unique/FAQSection/FAQSection";
import ContactSection from "./../../components/Unique/ContactSection/ContactSection";
import { useEffect } from "react";
import { scrollToTop } from "../../utilities/scrollToTop";
import CraftCategories from './../../components/Unique/CraftCategories/CraftCategories';
import MyHelmate from './../../components/Shared/MyHelmate/MyHelmate';
const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <MyHelmate
      title='Home'
      />

      <Hero />
      <CraftItems />
      <CraftCategories/>
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
