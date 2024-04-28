import { useContext } from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col justify-center items-center min-h-[100vh]">

        <h2 className="md:text-5xl text-4xl font-bold text-gray-400">Opps! Sorry;</h2>
        <h1 className="md:text-8xl text-6xl  font-bold text-gray-400 pt-3">404</h1>
        <p className="md:text-2xl text-xl font-semibold my-3 text-gray-400">Page Not Found</p>
      <Link to={"/"}>
        <button className={`btn w-full rounded-none hover:bg-[#AB7442]
             border-none text-gray-50 bg-gray-900 `}>Return to home</button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
