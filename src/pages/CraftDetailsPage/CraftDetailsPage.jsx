import { Link, useLoaderData } from "react-router-dom";

const CraftDetailsPage = () => {
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
    customization_example,
    stock_status,
    photoUrl,
    price,
  } = craft;
  return (
   <section className="container mx-auto px-4">
     <div className="card card-compact bg-base-100 flex-row">
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
        <div>
          <Link className="w-full" to={`/all-crafts`}>
            <button className="btn w-full btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
   </section>
  );
};

export default CraftDetailsPage;
