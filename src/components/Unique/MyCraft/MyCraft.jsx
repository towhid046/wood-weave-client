import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { BiDollar } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCraft = ({ craft, crafts, setCrafts }) => {
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

  const handleDeleteCraft = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Craft Item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://assignment-10-server-side-liart.vercel.app/crafts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Craft has deleted", {
                autoClose: 2000,
              });
              const reminigCrafts = crafts.filter((craft) => craft._id !== id);
              setCrafts(reminigCrafts);
            }
          });
      }
    });
  };

  return (
    <div className="bg-base-100 shadow-lg flex flex-col justify-between">
      <figure className="relative cursor-pointer overflow-hidden">
        <Link to={`/craft-details/${_id}`}>
          <img
            className="w-full h-64 hover:scale-125 transition ease-in-out duration-500"
            src={photoUrl}
            alt="Craft Img"
          />
        </Link>
      </figure>
      <div className="p-4">
        <div className="mb-4 space-y-1">
          <h2 className="text-2xl font-semibold mb-2">{item_name}</h2>
          <div className="py-1 flex items-center text-xl text-[#e7a261]">
            <BiDollar className="text-2xl text-" />
            <strong>{price}</strong>
          </div>
          <p>
            <em className="">Rating :</em> {rating}
          </p>
          <p>
            <em className="">Customization :</em> {customization}
          </p>
          <p>
            <em className="">Stock Status :</em> {stock_status}
          </p>
        </div>
        <div className=" flex gap-4">
          <button
            onClick={() => handleDeleteCraft(_id)}
            className={`btn rounded-none w-1/2
            bg-red-600 border-none text-gray-50 hover:bg-red-800 `}
          >
            Delete <RiDeleteBin6Line />
          </button>
          <Link className="w-1/2" to={`/update-craft/${_id}`}>
            <button
              className={`btn rounded-none w-full  bg-[#AB7442]  border-none text-gray-50 hover:bg-[#9c6538] `}
            >
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
