import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";

const MyCraft = ({craft}) => {
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
          <h2 className="card-title">Name: {item_name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Customization: {customization}</p>
          <strong>Stock: {stock_status}</strong>
          <div className=" flex gap-4">
          <button
            // onClick={() => handelDeleteCraft(_id)}
            className="btn btn-error w-1/2"
          >
            Remove
          </button>
          <Link className="w-1/2" to={`/update-craft/${_id}`}>
            <button className="btn w-full btn-info">
              Update <LuPencilLine />{" "}
            </button>
          </Link>
          </div>
        </div>
      </div>
    );
  };
  
  MyCraft.propTypes = {
    craft: PropTypes.object.isRequired,
  };
export default MyCraft;