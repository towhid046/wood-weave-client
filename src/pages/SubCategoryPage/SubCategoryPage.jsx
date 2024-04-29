import { useLoaderData } from "react-router-dom";
import SectionHeader from "./../../components/Shared/SectionHeader/SectionHeader";
import CraftItem from "../../components/Unique/CraftItem/CraftItem";
import { useEffect } from "react";
import { scrollToTop } from "../../utilities/scrollToTop";
import MyHelmate from './../../components/Shared/MyHelmate/MyHelmate';
const SubCategoryPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const crafts = useLoaderData();

  return (
    <section className="min-h-screen container mx-auto px-4 mb-20">
      <MyHelmate title="Sub Category"/>
      {crafts.length ? (
        <>
          <SectionHeader
            title={`${crafts[0]?.subcategory_name} Crafts`}
            description={`Here you can see all the crafts regarding of the ${crafts[0]?.subcategory_name} sub category.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crafts.map((craft) => (
              <CraftItem key={craft._id} craft={craft} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="py-12 text-2xl font-semibold text-gray-400 px-4 text-center">
          No Craft have found in this sub-category
        </h2>
      )}
    </section>
  );
};

export default SubCategoryPage;
