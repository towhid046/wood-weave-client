import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
import { BiDollar } from "react-icons/bi";
import { Slide } from "react-awesome-reveal";

const CraftItem = ({ craft }) => {
  const { mode } = useContext(UserContext);

  const {
    _id,
    user_name,
    user_email,
    item_name,
    short_description,
    processing_time,
    subcategory_name,
    rating,
    customization,
    stock_status,
    photoUrl,
    price,
  } = craft;


  return (
    <Slide>
      <div className="bg-base-100 shadow-lg flex flex-col justify-between">
        <figure className="relative cursor-pointer overflow-hidden">
          <Link to={`/craft-details/${_id}`}>
            <img
              className="w-full md:h-64 h-72 hover:scale-125 transition ease-in-out duration-500"
              src={photoUrl}
              alt="Craft Img"
            />
          </Link>
          <span className="absolute top-3 right-3 btn rounded-none  btn-sm">
            {stock_status}
          </span>
        </figure>
        <div className="p-4">
          <div className="mb-4 space-y-1">
            <h2 className="text-2xl font-semibold mb-2">{item_name}</h2>
            <p className="pb-2">
              <em>{subcategory_name}</em>
            </p>
            <hr />
            <p className="pt-2">
              {short_description.split(" ").splice(0, 12).join(" ")} . . .
            </p>

            <div className="py-1 flex items-center text-xl text-[#e7a261]">
              <BiDollar className="text-2xl text-" />
              <strong>{price}</strong>
            </div>
            <p>
              <strong className="">Rating:</strong> {rating}
            </p>
            <p>Processing Time: {processing_time}</p>
          </div>

          <Link className="w-full" to={`/craft-details/${_id}`}>
            <button
              className={`btn w-full rounded-none ${
                mode ? "bg-[#AB7442]" : "bg-gray-800"
              } border-none text-gray-50 hover:bg-gray-900 `}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

CraftItem.propTypes = {
  craft: PropTypes.object.isRequired,
};
export default CraftItem;
