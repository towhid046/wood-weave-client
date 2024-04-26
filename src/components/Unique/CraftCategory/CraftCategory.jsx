import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CraftCategory = ({ category }) => {
  const { image, category_name, short_description } = category;
  return (
    <Link to={`/sub-category/${category_name}`}>
    <div className="card card-compact  bg-base-100 border">
      <figure>
        <img src={image} alt={category_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info w-full">View Crafts</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

CraftCategory.propTypes = {
  category: PropTypes.object.isRequired,
};
export default CraftCategory;
