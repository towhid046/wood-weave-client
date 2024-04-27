import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
import { Tooltip } from "react-tooltip";

const CraftCategory = ({ category }) => {
  const { mode } = useContext(UserContext);

  const { image, category_name, short_description } = category;
  return (
    <Link
      data-tooltip-id="my-tooltip2"
      data-tooltip-content={`Click to see ${category_name}`}
      className="bg-base-100 shadow-lg rounded-lg  cursor-pointer flex flex-col justify-between"
      to={`/sub-category/${category_name}`}
    >
      <figure className="overflow-hidden rounded-lg">
        <img className="w-full h-64" src={image} alt="Craft Img" />
      </figure>
      <div className="p-4">
        <div className="mb-4 space-y-1">
          <h2 className="text-xl font-semibold mb-2">{category_name}</h2>
          <hr />
          <p className="pt-2">
            {short_description.split(" ").splice(0, 8).join(" ")} . . .
          </p>
        </div>

        <button
          className={`btn w-full ${
            mode ? "bg-gray-900 hover:bg-[#AB7442]" : "bg-[#AB7442] hover:bg-gray-900"
          } border-none text-gray-50  `}
        >
          See all Crafts
        </button>
      </div>

      <Tooltip id="my-tooltip2" />
    </Link>
  );
};

CraftCategory.propTypes = {
  category: PropTypes.object.isRequired,
};
export default CraftCategory;
