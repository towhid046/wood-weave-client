import { useLoaderData } from "react-router-dom";
import CraftItem from "../CraftItem/CraftItem";
import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";

const CraftItems = () => {
  const crafts = useLoaderData();
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionHeader
        title={`Explore your favorit Crafts`}
        description="This is the description of the explore your favorit craft you can show detail of your craft by clicking on the view details button but to view details you must have to login otherwise you won't be able to access view detials page"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts &&
          crafts
            .slice(0, 9)
            .map((craft) => <CraftItem key={craft._id} craft={craft} />)}
      </div>
    </section>
  );
};

export default CraftItems;
