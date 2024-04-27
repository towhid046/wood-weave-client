import { useLoaderData } from "react-router-dom";
import SectionHeader from "./../../components/Shared/SectionHeader/SectionHeader";
import MyCraft from "../../components/Unique/MyCraft/MyCraft";
import { useContext, useEffect, useState } from "react";
import { scrollToTop } from "./../../utilities/scrollToTop";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";

const MyCraftPage = () => {
  const {user} = useContext(UserContext)
  const initialCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(initialCrafts);

  useEffect(() => {
    scrollToTop();
  });

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
      <SectionHeader 
      title="Your Added Crafts"
      description={`Hey ${user.displayName}, In this page you can see all the crafts you have added and you can delete and update the craft you want. You also can filter the crafts by customization.`}
      />
      <div className="text-center mb-12">
        <select
          onChange={(e) => handleCustomization(e.target.value)}
          className="select focus:outline-none rounded-none select-bordered w-full max-w-xs"
        >
          <option value="filterBy" className="text-gray-400">
            Filter By Customization
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {
        crafts.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts?.map((craft) => (
          <MyCraft
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          />
        ))}
      </div> :
    <h2 className="text-center py-12 text-gray-400 text-2xl font-semibold">No Item have found</h2> 
      }
    </section>
  );
};

export default MyCraftPage;
