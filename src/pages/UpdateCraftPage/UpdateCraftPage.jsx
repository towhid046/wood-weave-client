import swal from "sweetalert";
import SectionHeader from "../../components/Shared/SectionHeader/SectionHeader";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { scrollToTop } from "./../../utilities/scrollToTop";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCraftPage = () => {
  const craft = useLoaderData();
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
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
        "Jute Kitchenware & utensils",
        "Jute and wooden jewellery",
      ],
      defVal: subcategory_name,
    },
    {
      id: 200,
      title: "Rating",
      options: ["1", "2", "3", "4", "5"],
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

    fetch(`http://localhost:5000/update-craft/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          swal("Updated!", "The craft have been update successfully", "success");
          navigate(`/my-craft/${user?.email}`)
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
        className="focus:outline-none input w-full rounded outline-none bg-white"
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
        className="select focus:outline-none w-full rounded outline-none bg-white"
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
    <section className="container mx-auto px-2">
      <div className="bg-[#f4f4f0] px-20 py-12 my-12">
        <SectionHeader
          title="Update the Craft"
          description="It is a long established fact that a reader will be distraceted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using Content here."
        />

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
                className="focus:outline-none input w-full rounded outline-none bg-white"
                required
              />
            </div>

            <div>
              <button className="btn w-full rounded-lg text-lg font-bold bg-[#d2b48c] ">
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
