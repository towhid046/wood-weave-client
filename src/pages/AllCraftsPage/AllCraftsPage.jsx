import { Link, useLoaderData } from "react-router-dom";
import SectionHeader from "./../../components/Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";
import { scrollToTop } from "./../../utilities/scrollToTop";

const AllCraftsPage = () => {
  const crafts = useLoaderData();

  useEffect(() => {
    scrollToTop();
  }, []);

  const items = crafts?.map((craft, index) => (
    <tr key={craft._id} className="text-center">
      <th>{index + 1}</th>
      <td>{craft.item_name}</td>
      <td>{craft.price}</td>
      <td>{craft.rating}</td>
      <td>{craft.stock_status}</td>
      <td>
        <Link to={`/craft-details/${craft._id}`}>
          <button className="btn btn-info btn-sm">View Details</button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <section className="container mx-auto px-4 min-h-screen">
      <SectionHeader />
      <div className="flex justify-center ">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-black text-white ">
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
