import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import swal from "sweetalert";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, loading, logOutUser, mode, setMode } = useContext(UserContext);
  const navigate = useNavigate();

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
    <nav
      className={`${
        mode ? "bg-white" : "bg-[#1D232A]"
      } shadow-sm sticky top-0 z-50 `}
    >
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
              className="gap-4  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base"
            >
              {links}
              <li className="md:hidden flex">
                <NavLink to={'/register'}>Register</NavLink>
              </li>
            </ul>
          </div>
          <Link className=" md:text-3xl text-xl font-bold bg-gradient-to-r from-gray-700 via-[#AB7442] to-[#AB7442] inline-block text-transparent bg-clip-text">
            WoodWeave
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-4 menu menu-horizontal px-1 text-base">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={mode ? 'Dark Theme': 'Light Theme'}
            onClick={handleToggle}
            className={`md:relative md:top-0 md:bottom-0 md:bg-none ${user ? 'btn w-12 h-10 rounded-full fixed bottom-5 rigth-4' : 'flex'} text-2xl mr-2 transition ease-in-out swap swap-rotate swap-on`}
          >
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
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    className="md:w-11 rounded-full md:h-11 w-9 h-9 cursor-pointer"
                    src={user?.photoURL}
                    alt="User"
                  />
                  <button onClick={handleLogOutUser} className="btn bg-black text-gray-300 hover:bg-[#4C4C4C] ">
                    Log Out
                  </button>
                </div>
              ) : (
                <>
                  <Link to={"register"} className={`btn bg-[#AB7442] text-white  border-none hover:bg-[#4C4C4C] md:flex hidden ${mode ? '' : 'bg-gray-400'} `}>
                    Register
                  </Link>
                  <Link to={"login"} className={`btn text-white  border-none hover:bg-gray-600 ${mode ? 'bg-gray-800' : 'bg-[#AB7442]'} `}>
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;