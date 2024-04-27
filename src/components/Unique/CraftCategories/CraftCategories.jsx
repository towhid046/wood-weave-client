import { useEffect, useState } from "react";
import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";
import CraftCategory from "../CraftCategory/CraftCategory";
const CraftCategories = () => {
  const [craftCategories, setCraftCategories] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://assignment-10-server-side-liart.vercel.app/craft-subcategories"
      );
      const data = await res.json();
      setCraftCategories(data);
    };
    loadData();
  }, []);

  return (
    <section id="sub-categories" className="bg-base-200">
      <div className="container mx-auto px-4 py-10">
      <SectionHeader
        title="Explore Diverse Craft Categories"
        description="Dive into our craft categories to discover a world of handmade wonders. From woodwork to jute crafts, each category offers unique treasures for your home. Click to explore stunning images and learn more about the artistry behind each piece. Find the perfect handcrafted addition to your space today!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {craftCategories.map((category) => (
          <CraftCategory key={category._id} category={category} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default CraftCategories;
