import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../../src/assets/logos/google-logo.png";
import githubLogo from "../../../src/assets/logos/github-logo.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { scrollToTop } from './../../utilities/scrollToTop';
import swal from "sweetalert";

const Login = () => {
  const { loginUser, logInWithGoogle, logInWithGithub } =
    useContext(UserContext);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate()


  useEffect(() => {
    scrollToTop();
  }, []);

  const handelLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        swal('Login Success', 'You have login successfully', 'success')
        e.target.reset();
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "Something went wrong! Your email or password may not match",
          {
            autoClose: 5000,
            position: "top-center",
            theme: "dark",
          }
        );
      });
  };

  const handelShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handelLogInWithGoogle = () => {
    logInWithGoogle()
      .then((res) => {
        swal('Login Success', 'You have login successfully', 'success')

        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handelLogInWithGithub = () => {
    logInWithGithub()
      .then((res) => {
        swal('Login Success', 'You have login successfully', 'success')
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
    {/* <Helmet>
        <title>Green Villa | Login</title>
      </Helmet> */}
      <div className="hero md:min-h-screen container-fluid pt-12 pb-8">
        <div className="w-full px-4">
          <div className="max-w-xl border rounded-xl bg-base-100 mx-auto md:p-12 py-8 px-6">
            <h1 className="text-2xl font-bold text-center mb-8">
              Login your account
            </h1>
            <hr />
            <form onSubmit={handelLoginForm} className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Email address</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="relative">
                <label className="label">
                  <strong className="label-text">Password</strong>
                </label>
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />

                {/* password show eye off-on */}
                <div className="absolute right-3 bottom-4 ">
                  {isShowPassword ? (
                    <span
                      className="cursor-pointer"
                      onClick={handelShowPassword}
                    >
                      <LuEye />
                    </span>
                  ) : (
                    <span
                      className="cursor-pointer"
                      onClick={handelShowPassword}
                    >
                      <LuEyeOff />
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control my-5">
                <button className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]">
                  Log in
                </button>
              </div>
            </form>
            <div>
              <div className="text-center mb-4">
                <h2 className="text-2xl">Or</h2>
                <p>Log In with</p>
              </div>
              <div className="flex justify-center gap-5">
                <button
                  onClick={handelLogInWithGoogle}
                  className="btn flex items-center gap-2"
                >
                  <img className="w-8" src={googleLogo} alt="Google" />
                  <span> Google</span>
                </button>
                <button
                  onClick={handelLogInWithGithub}
                  className="btn flex items-center gap-2"
                >
                  <img className="w-8" src={githubLogo} alt="Github" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
            <p className="text-center mt-5">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Regester
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;