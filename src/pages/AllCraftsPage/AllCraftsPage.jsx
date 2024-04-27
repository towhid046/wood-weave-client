import { Link, useLoaderData } from "react-router-dom";
import SectionHeader from "./../../components/Shared/SectionHeader/SectionHeader";
import { useContext, useEffect } from "react";
import { scrollToTop } from "./../../utilities/scrollToTop";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";

const AllCraftsPage = () => {
  const crafts = useLoaderData();
  const {mode} = useContext(UserContext)

  useEffect(() => {
    scrollToTop();
  }, []);

  const items = crafts?.map((craft, index) => (
    <tr key={craft._id} className="text-center">
      <th>{index + 1}</th>
      <td>{craft.item_name}</td>
      <td>${craft.price}</td>
      <td>{craft.rating}</td>
      <td>{craft.stock_status}</td>
      <td>
        <Link to={`/craft-details/${craft._id}`}>
          <button className={`btn text-xs hover:bg-[#AB7442] text-gray-50 rounded-none btn-sm border-none ${mode && 'bg-gray-800'}`}>View Details</button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <section className="container mx-auto px-4 min-h-screen mb-20">
      <SectionHeader
      title={`All Crafts Collection : ${crafts?.length}`}
      description="Explore All diverse crafts selection. Each item offers unique details and craftsmanship. Click 'View Details' to learn more about each craft"
      />
      <div className=" flex justify-center mx-auto ">
        <div className="w-full max-w-4xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className={` ${mode ? 'bg-[#AB7442]' : 'bg-gray-700'} text-white `}>
                <tr className="text-center">
                  <th>SN.</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Stock Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCraftsPage;
