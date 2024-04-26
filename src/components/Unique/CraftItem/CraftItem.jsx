import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CraftItem = ({ craft }) => {
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
    <div className="card card-compact bg-base-100 border">
      <figure>
        <img className="w-full" src={photoUrl} alt="Craft Img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{short_description}</p>
        <p>Rating: {rating}</p>
        <p>Processing Time: {processing_time}</p>
        <p>Price: {price}</p>
        <strong>Stock: {stock_status}</strong>
        <div className="card-actions justify-end">
          <Link className="w-full" to={`/craft-details/${_id}`}>
            <button className="btn w-full btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  craft: PropTypes.object.isRequired,
};
export default CraftItem;
