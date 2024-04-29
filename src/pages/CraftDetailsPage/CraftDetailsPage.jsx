import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { scrollToTop } from "../../utilities/scrollToTop";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import SectionHeader from './../../components/Shared/SectionHeader/SectionHeader';
import {Slide} from 'react-awesome-reveal'
import MyHelmate from "../../components/Shared/MyHelmate/MyHelmate";

const CraftDetailsPage = () => {

  const {mode} = useContext(UserContext)

  useEffect(() => {
    scrollToTop();
  }, []);

  const craft = useLoaderData();
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
    <section className="container mx-auto px-4 min-h-screen pb-14">
      <MyHelmate title="Craft details" />

      <SectionHeader
      title={`${item_name} Details `}
      description={`Discover the elegance of ${item_name} details, a ${subcategory_name} that epitomizes craftsmanship and beauty. From its intricate details to its natural charm, ${item_name} details adds sophistication to any space. Experience the allure of ${item_name} details and elevate your decor effortlessly!`}
      />
      <div className={`bg-base-100 flex lg:flex-row flex-col border p-5 justify-between max-w-6xl gap-8 items-start mx-auto ${mode ? 'border-gray-300' : 'border-gray-700'}`}>
          <Slide className="flex-1" direction="right">
        <figure className="roundex-xl overflow-hidden">
          <img className="w-full rounded-none hover:scale-125 transition ease-in-out duration-500 cursor-pointer" src={photoUrl} alt="Craft Img" />
        </figure>
          </Slide>

       <Slide className="flex-1">
       <div className="space-y-3">
          <h2 className="md:text-4xl text-2xl mb-2 font-bold">{item_name}</h2>
          <h3 className="text-xl font-semibold">{subcategory_name}</h3>
          <p className="pb-2">
            <em className="font-semibold">Short Description: </em>
            {short_description}
          </p>
          <hr />
          <p className="pt-2">
            <em className="font-semibold">Price : </em>${price}
          </p>
          <p>
            <em className="font-semibold">Rating : </em>
            {rating}
          </p>
          <p>
            <em className="font-semibold">Stock Status : </em>
            {stock_status}
          </p>
          <p>
            <em className="font-semibold">Customization : </em>
            {customization}
          </p>
          <div>
            <p>
              <em className="font-semibold">Processing Time : </em>
              {processing_time}
            </p>
            <div className="mt-4">
              <Link className="w-full" to={`/all-crafts`}>
                <button className="btn w-full rounded-none bg-gray-700 hover:bg-[#AB7442] text-gray-200">
                  View All Crafts
                </button>
              </Link>
            </div>
          </div>
        </div>
       </Slide>
      </div>
    </section>
  );
};

export default CraftDetailsPage;
