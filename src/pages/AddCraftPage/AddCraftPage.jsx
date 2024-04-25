import swal from "sweetalert";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
// import FormHeader from '../components/shared/FormHeader';

const AddCraftPage = () => {
  const coffeeFormData = [
    {
      id: 1,
      title: "Name",
    },
    {
      id: 2,
      title: "Chef",
    },
    {
      id: 3,
      title: "Supplier",
    },
    {
      id: 4,
      title: "Test",
    },
    {
      id: 5,
      title: "Category",
    },
    {
      id: 6,
      title: "Details",
    },
  ];

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const newCoffee = {};
    const form = e.target;

    coffeeFormData.forEach((data) => {
      newCoffee[data.title.toLowerCase()] =
        form[data.title.toLowerCase()].value;
    });
    newCoffee.photoUrl = form.photoUrl.value;
    console.log(newCoffee)

    // fetch("https://coffee-store-bd-server.vercel.app/all-coffees", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(newCoffee),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       swal("Added!", "The coffee have been added successfully", "success");
    //     }
    //   });
  };

  return (
    <section className="container mx-auto px-2">
      <Link to={"/"} className="inline-block">
        <button className="my-4 flex gap-4 items-center text-xl font-bold">
          <BsArrowLeft />
          <span>Back to Home</span>
        </button>
      </Link>
      <div className="bg-[#f4f4f0] px-20 py-12 my-12">
        {/* <FormHeader
          title="Add New Coffee"
          description="It is a long established fact that a reader will be distraceted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using Content here."
        /> */}

        <div>
          <form onSubmit={handleAddCoffee} className="space-y-3 ">
            <div className="grid md:grid-cols-2 md:gap-x-6 gap-2 mb-3">
              {coffeeFormData.map((data) => (
                <div className="w-full" key={data.id}>
                  <label className="label">
                    <strong className="label-text">{data.title}</strong>
                  </label>
                  <input
                    type="text"
                    name={data.title.toLowerCase()}
                    placeholder={`Enter Coffee ${data.title.toLowerCase()}`}
                    className="focus:outline-none input w-full rounded outline-none bg-white"
                    required
                  />
                </div>
              ))}
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
              <button className="btn w-full rounded-lg text-lg font-semibold bg-[#d2b48c]">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCraftPage;
