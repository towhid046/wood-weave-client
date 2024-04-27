import { useLoaderData } from "react-router-dom";
import CraftItem from "../CraftItem/CraftItem";
import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";

const CraftItems = () => {
  const crafts = useLoaderData();
  return (
    <section id="explore-now" className="container mx-auto px-4 py-10 mb-10">
      <SectionHeader
        title={`Discover Your Favorite Craft Items`}
        description="Explore our curated collection of jute and wood crafts, each showcasing natural beauty and craftsmanship. From rustic jute decor to elegant wooden creations, discover intricate details by clicking 'View Details'. Remember, login for the full experience. Begin your journey into jute and wood treasures today!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts &&
          [...crafts]
            .slice(0, 6)
            .map((craft) => <CraftItem key={craft._id} craft={craft} />)}
      </div>
    </section>
  );
};

export default CraftItems;
