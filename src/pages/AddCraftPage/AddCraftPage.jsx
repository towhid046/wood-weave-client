import swal from "sweetalert";
import SectionHeader from "../../components/Shared/SectionHeader/SectionHeader";
import {craftFormData2, craftFormData} from "./AddCraftFormData";

const AddCraftPage = () => {

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

    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Added!", "The craft have been added successfully", "success");
        }
      });
  };

  const craftFormItems = craftFormData.map((data) => (
    <div className="w-full" key={data.id}>
      <label className="label">
        <strong className="label-text">{data.title}</strong>
      </label>
      <input
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
    <section className="container mx-auto px-2">
      <div className="bg-[#f4f4f0] px-20 py-12 my-12">
        <SectionHeader
          title="Add New Item"
          description="It is a long established fact that a reader will be distraceted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using Content here."
        />

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
                className="focus:outline-none input w-full rounded outline-none bg-white"
                required
              />
            </div>

            <div>
              <button className="btn w-full rounded-lg text-lg font-bold bg-[#d2b48c] ">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCraftPage;