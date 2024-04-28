import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";

const Footer = () => {
  const { mode } = useContext(UserContext);

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
    { name: "Crafts", url: "explore-now" },
    { name: "Sub-categories", url: "sub-categories" },
    { name: "Contact", url: "contact" },
    { name: "FAQ", url: "faq" },
  ];
  const pageLinks = [
    { name: "Log In", url: "/login" },
    { name: "Register", url: "/register" },
    { name: "All Crafts", url: "/all-crafts" },
    { name: "Add Craft", url: "/add-craft" },
  ];

  return (
    <>
      <footer className="bg-base-200">
        <div className="footer container border-b mx-auto px-4 p-10 ">
          <div className="max-w-md">
            <Link className=" md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-gray-700 via-[#AB7442] to-[#d4ad89] inline-block text-transparent bg-clip-text font-teko">
              WoodWeave
            </Link>
            <p>
              Experience the beauty of artisanal wood and jute crafts at
              Woodweave.
            </p>
            <ul>
            {contacts.map((contact, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.text}</span>
              </li>
            ))}
          </ul>
          </div>

          <nav>
            <h6 className="footer-title text-lg">Home Links</h6>
            {quickLinks.map((link, index) => (
              <a href={`#${link.url}`} key={index} className="link link-hover">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Page Links */}
          <nav>
            <h6 className="footer-title text-lg">Page Links</h6>
            {pageLinks.map((link, index) => (
              <Link to={link.url} key={index} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socail links */}
          <nav>
            <h6 className="footer-title text-lg">Soclia Links</h6>
            <p>
              Get Connected with our <br /> Social Platfroms
            </p>
            <ul className="mt-2 flex gap-2 text-xl items-center">
              {socialIcons.map((icon, index) => (
                <li
                  className="cursor-pointer btn btn-circle text-lg  btn-sm bg-gray-700 text-gray-50 hover:bg-[#AB7442]"
                  key={index}
                >
                  {icon}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>

      <footer className="bg-base-200">
        <div className=" container md:flex-row flex-col flex justify-between  mx-auto px-4 items-center py-2 text-[13px] gap-3">
        <ul className="flex gap-3 mt-4">
              <li className="link link-hover">Terms of use</li> |
              <li className="link link-hover">Privacy policy</li>
            </ul>
          <p>Copyright &copy; 2024 - All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
