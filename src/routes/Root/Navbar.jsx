import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import swal from "sweetalert";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, loading, logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    setMode(!mode);
  };

  useEffect(() => {
    const html = document.getElementById("html").attributes;
    html["data-theme"].value = mode === true ? "light" : "dark";
  }, [mode]);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-crafts"}>All Crafts</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-craft"}>Add Craft</NavLink>
          </li>
          <li>
            <NavLink to={`/my-craft/${user?.email}`}>My Craft</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOutUser = () => {
    logOutUser()
      .then((res) => {
        swal("Log Out", "You have logout successfully!", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="shadow-sm sticky top-0 z-50 ">
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
              className="gap-4  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost md:text-2xl text-xl font-bold">
            WoodWeave
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-4 menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div onClick={handleToggle} className="text-2xl mr-2 transition ease-in-out swap swap-rotate swap-on">
            {mode ? (
              <button>
                <CiDark />
              </button>
            ) : (
              <button>
                <MdOutlineLightMode />
              </button>
            )}
          </div>
          {loading ? (
            <div className="loading loading-spinner loading-md"></div>
          ) : (
            <>
              {user ? (
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 rounded-full h-10 cursor-pointer"
                    src={user?.photoURL}
                    alt="User"
                    title={user?.displayName}
                  />
                  <button onClick={handleLogOutUser} className="btn btn-error">
                    Log Out
                  </button>
                </div>
              ) : (
                <>
                  <Link to={"register"} className="btn btn-primary">
                    Register
                  </Link>
                  <Link to={"login"} className="btn btn-info">
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
