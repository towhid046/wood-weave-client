import swal from "sweetalert";
import SectionHeader from "../../components/Shared/SectionHeader/SectionHeader";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { scrollToTop } from "./../../utilities/scrollToTop";

const AddCraftPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const { user, mode } = useContext(UserContext);
  const craftFormData = [
    { id: 1, title: "User_Name", type: "text", defVal: user?.displayName },
    { id: 2, title: "User_Email", type: "email", defVal: user?.email },
    { id: 3, title: "Item_Name", type: "text" },
    { id: 4, title: "Price", type: "number" },
    { id: 5, title: "Short_Description", type: "text" },
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
    },
    {
      id: 200,
      title: "Rating",
      options: [1, 2, 3, 3.5, 4, 4.5, 5],
    },
    {
      id: 300,
      title: "Customization",
      options: ["yes", "no"],
    },
    {
      id: 400,
      title: "Stock_Status",
      options: ["In stock", "Made to Order"],
    },
    {
      id: 500,
      title: "Processing_Time",
      options: [
        "1 - 2 Business Days ",
        "3 - 5 Business Days ",
        "6 - 8 Business Days ",
        "9 - 11 Business Days ",
        "12 - 14 Business Days ",
        "Above 14 Business Days"
      ],
    },
  ];

  const handleAddCraft = (e) => {
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

    fetch("https://assignment-10-server-side-liart.vercel.app/crafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Added!", "The craft have been added successfully", "success");
          form.reset()
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
        <option className="text-gray-400" value={"Not Selected"}>
          Select {item.title}
        </option>
        {item.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ));

  return (
    <section className="container mx-auto px-2 mb-32">
      <SectionHeader
        title="Add New Craft"
        description=" Add New Craft Section and Unleash Your Creative Vision. Dive deep into a world of endless possibilities as you bring your ideas to life. With a user-friendly interface designed for efficiency, crafting your masterpiece has never been easier."
      />
      <div
        className={`${
          mode ? "bg-base-200" : " border border-gray-700 text-black rounded-none"
        } lg:px-20 md:px-12 px-4 py-12 my-12`}
      >
        <div>
          <form onSubmit={handleAddCraft} className="space-y-3 ">
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
                placeholder="Enter photo URL"
                className="focus:outline-none input w-full rounded-none outline-none bg-white"
                required
              />
            </div>

            <div>
              <button className="btn w-full rounded-none text-lg font-bold bg-[#AB7442] hover:bg-gray-700 text-gray-100">
                Add Craft
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCraftPage;