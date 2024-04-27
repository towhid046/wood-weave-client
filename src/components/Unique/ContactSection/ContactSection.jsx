import { useContext } from "react";
import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";

const ContactSection = () => {

  const {mode} = useContext(UserContext)

  return (
    <section id="contact" className="container mx-auto px-4 py-10 mb-10">
      <SectionHeader
        title="Reach Out to Us"
        description="Contact Us for any inquiries, feedback, or assistance. We're here to help! Simply fill out the form below or reach us through phone or email. We value your input and look forward to hearing from you."
      />
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="space-y-5 flex-1">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <hr className="w-20 border-2" />
          <p>
          Feel free to reach out to us with any questions, feedback, or inquiries you may have. We're here to assist you in any way we can.
          </p>
          <div className="flex md:gap-20 flex-wrap gap-7">
            <ul className="text-lg font-semibold">
              <li>Address:</li>
              <li className="mt-4 mb-8">Hours:</li>
              <li>Contacts:</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>127 Midtown Manhattan, New York</li>
              <li>
                Monday - Saturday, 11 AM - 9 PM <br />
                Sunday: 11 AM - 7 PM
              </li>
              <li>+11 23456789123 <br /> xyz123@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className={`flex-1 p-5 border ${mode ? 'border-gray-300' : 'border-gray-700'}`}>
          <form className="space-y-3">
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <div className="w-full">
                <label className="label">
                  <strong className="label-text">Your Name</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>

              <div className="w-full">
                <label className="label">
                  <strong className="label-text">Email</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="label">
                <strong className="label-text">Subject</strong>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your Subject"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
            <div>
              <label className="label">
                <strong className="label-text">Message</strong>
              </label>
              <textarea
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3] textarea  text-base xl:h-30 h-20"
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full rounded-none bg-[#AB7442] text-white hover:bg-gray-700">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
