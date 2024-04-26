import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
const Footer = () => {
  const {mode} = useContext(UserContext)

  const socialIcons = [
    <FaFacebook />,
    <FaWhatsapp />,
    <FaInstagram />,
    <FaXTwitter />,
  ];

  const contacts = [
    {
      icon: <FiMapPin />,
      text: "127 Midtown Manhattan, New York",
    },
    { icon: <LuPhone />, text: "+11 23456789123" },
    { icon: <IoMailOutline />, text: "abc123@gmail.com" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/news" },
    { name: "Contact", url: "/contact" },
    { name: "FAQ", url: "/news" },
  ];
  const services = [
    { name: "Log In", url: "/login" },
    { name: "Register", url: "/register" },
    { name: "UserProfile", url: "/user-profile" },
    { name: "Saved Items", url: "/saved-properties" },
  ];

  return (
    <>
      <footer className={`  ${mode ? 'bg-[#F3CA8F]' : 'bg-[#1D232A] text-gray-400'} text-black`}>
        <div className="footer container border-b mx-auto px-4 p-10 ">
          <div className="max-w-md">
            <Link
              to="/"
              className="font-bold md:text-3xl text-2xl"
            >
              WoodWeave
            </Link>
            <p>
              Woodweave is your premier destination for luxurious estate living
              nestled amidst nature's embrace.{" "}
            </p>
            <ul className="mt-4 flex gap-3 text-xl items-center">
              {socialIcons.map((icon, index) => (
                <li className="cursor-pointer" key={index}>
                  {icon}
                </li>
              ))}
            </ul>
          </div>

          <nav>
            <h6 className="footer-title text-lg">Quick Links</h6>
            {quickLinks.map((link, index) => (
              <Link to={link.url} key={index} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav>

          <nav>
            <h6 className="footer-title text-lg">Services</h6>
            {services.map((link, index) => (
              <Link to={link.url} key={index} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* contact */}
          <ul>
            <h6 className="footer-title text-lg">Contact</h6>
            {contacts.map((contact, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <footer className={`  ${mode ? 'bg-[#F3CA8F]' : 'bg-[#1D232A] text-gray-400'} text-black`}>
        <div className=" container md:flex-row flex-col flex justify-between  mx-auto px-4 items-center py-4 text-[13px] gap-3">
          <p>Copyright &copy; 2024 - All right reserved</p>
          <ul className="flex gap-3">
            <li className="link link-hover">Terms of use</li> |
            <li className="link link-hover">Privacy policy</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
