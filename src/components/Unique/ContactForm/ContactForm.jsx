import { useContext } from "react";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";

const ContactForm = () => {
    const {mode} = useContext(UserContext)
    return (
        <div className={`p-5 border ${mode ? 'border-gray-300' : 'border-gray-700'}`}>
          <form className="space-y-3 text-black">
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
    );
};

export default ContactForm;