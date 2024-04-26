import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import swal from "sweetalert";
import { toast } from "react-toastify";

const MyCraft = ({ craft, crafts, setCrafts }) => {
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

  const handleDeleteCraft = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Craft Item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.warn("Craft has deleted");
              const reminigCrafts = crafts.filter((craft) => craft._id !== id);
              setCrafts(reminigCrafts)
            }
          });
      }
    });
  };

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
            onClick={() => handleDeleteCraft(_id)}
            className="btn btn-error w-1/2"
          >
            Delete
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
  crafts: PropTypes.arrayOf(object).isRequired,
  setCrafts: PropTypes.func.isRequired,
};
export default MyCraft;
