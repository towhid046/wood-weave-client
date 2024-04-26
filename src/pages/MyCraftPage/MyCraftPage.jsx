import { useLoaderData } from "react-router-dom";
import SectionHeader from "./../../components/Shared/SectionHeader/SectionHeader";
import MyCraft from "../../components/Unique/MyCraft/MyCraft";
import { useEffect, useState } from "react";
import { scrollToTop } from './../../utilities/scrollToTop';

const MyCraftPage = () => {
  const initialCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(initialCrafts);

  useEffect(()=>{
    scrollToTop()
  })

  const handleCustomization = (value) => {
    if (value === "yes") {
      const filteredYesItems = initialCrafts.filter(
        (craft) => craft.customization === "yes"
      );
      setCrafts(filteredYesItems);
    }
    if (value === "no") {
      const filteredNoItems = initialCrafts.filter(
        (craft) => craft.customization === "no"
      );
      setCrafts(filteredNoItems);
    }
    if (value === "filterBy") {
      setCrafts(initialCrafts);
    }
  };

  return (
    <section className="min-h-screen container mx-auto px-4 py-10">
      <SectionHeader />
      <div className="text-center mb-12">
        <select
          onChange={(e) => handleCustomization(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="filterBy" className="text-gray-400">
            Filter By Customization
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts?.map((craft) => (
          <MyCraft key={craft._id} craft={craft} />
        ))}
      </div>
    </section>
  );
};

export default MyCraftPage;
