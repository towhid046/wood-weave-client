import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-crafts"}>All Crafts</NavLink>
      </li>
      <li>
        <NavLink to={"/add-craft"}>Add Craft</NavLink>
      </li>
      <li>
        <NavLink to={"/my-craft"}>My Craft</NavLink>
      </li>
    </>
  );

  return (
    <nav className="shadow-sm sticky top-0 z-50 bg-white">
      <div className="navbar container mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">WoodWeave</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link className="btn btn-primary">Register</Link>
          <Link className="btn btn-info">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
