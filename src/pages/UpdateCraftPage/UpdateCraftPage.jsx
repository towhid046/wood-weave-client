import swal from "sweetalert";
import SectionHeader from "../../components/Shared/SectionHeader/SectionHeader";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { scrollToTop } from "./../../utilities/scrollToTop";
import { useLoaderData, useNavigate } from "react-router-dom";
import MyHelmate from './../../components/Shared/MyHelmate/MyHelmate';

const UpdateCraftPage = () => {
  const { mode } = useContext(UserContext);
  const craft = useLoaderData();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, []);

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

  const craftFormData = [
    { id: 1, title: "Item_Name", type: "text", defVal: item_name },
    { id: 2, title: "Price", type: "number", defVal: price },
    {
      id: 3,
      title: "Short_Description",
      type: "text",
      defVal: short_description,
    },
    { id: 4, title: "Processing_Time", type: "text", defVal: processing_time },
  ];

  const craftFormData2 = [
    {
      id: 100,
      title: "Subcategory_Name",
      options: [
        "Wooden Furniture & Sculptures",
        "Wooden Home Decor",
        "Wooden Utensils and Kitchenware",
        "Jute Home Decor",
        "Jute Kitchenware & Utensils",
        "Jute and Wooden Jewellery",
      ],
      defVal: subcategory_name,
    },
    {
      id: 200,
      title: "Rating",
      options: ["1", "2", "3", "3.5", "4", "4.5", "5"],
      defVal: rating,
    },
    {
      id: 300,
      title: "Customization",
      options: ["yes", "no"],
      defVal: customization,
    },
    {
      id: 400,
      title: "Stock_Status",
      options: ["In stock", "Made to Order"],
      defVal: stock_status,
    },
  ];

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const craft = {};

    craftFormData.forEach((data) => {
      craft[data.title.toLowerCase()] = form[data.title.toLowerCase()].value;
    });

    craftFormData2.forEach((item) => {
      craft[item.title.toLowerCase()] = form[item.title.toLowerCase()].value;
    });

    craft.photoUrl = form.photoUrl.value;

    fetch(
      `https://assignment-10-server-side-liart.vercel.app/update-craft/${_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(craft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal(
            "Updated!",
            "The craft have been update successfully",
            "success"
          );
          navigate(`/my-craft/${user?.email}`);
        }
      });
  };

  const craftFormItems = craftFormData.map((data) => (
    <div className="w-full" key={data.id}>
      <label className="label">
        <strong className="label-text">{data.title}</strong>
      </label>
      <input
        defaultValue={data.defVal || ""}
        type={data.type}
        name={data.title.toLowerCase()}
        placeholder={`Enter ${data.title.toLowerCase()}`}
        className="focus:outline-none input w-full rounded-none outline-none bg-white"
        required
      />
    </div>
  ));

  const craftFormItems2 = craftFormData2.map((item) => (
    <div key={item.id} className="w-full">
      <label className="label">
        <strong className="label-text">{item.title}</strong>
      </label>
      <select
        name={item.title.toLowerCase()}
        required
        className="select focus:outline-none w-full rounded-none outline-none bg-white"
      >
        <option defaultValue={item.defVal}>{item.defVal}</option>
        {item.options
          .filter((e) => e !== item.defVal)
          .map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  ));

  return (
    <section className="container mx-auto px-2 mb-20">
      <MyHelmate title="Update Craft"/>
      <SectionHeader
        title="Update the Craft"
        description="Craft Update: Admins refine their creations, maintaining creative control. Each admin can only update their added crafts, ensuring ownership and relevance"
      />

      <div
        className={`${
          mode
            ? "bg-base-200"
            : " border border-gray-700 text-black rounded-none"
        } lg:px-20 md:px-12 px-4 py-12 my-12`}
      >
        <div>
          <form onSubmit={handleUpdateCraft} className="space-y-3 ">
            <div className="grid md:grid-cols-2 md:gap-x-6 gap-2 mb-3">
              {craftFormItems}
              {craftFormItems2}
            </div>

            <div className="w-full pb-2">
              <label className="label">
                <strong className="label-text">Photo Url</strong>
              </label>
              <input
                type="text"
                name="photoUrl"
                defaultValue={photoUrl}
                placeholder="Enter photo URL"
                className="focus:outline-none input w-full rounded-none outline-none bg-white"
                required
              />
            </div>

            <div>
              <button className="btn w-full rounded-none text-lg font-bold bg-[#AB7442] hover:bg-gray-700 text-gray-100">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateCraftPage;
