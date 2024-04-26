import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";

const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionHeader />
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="space-y-5 flex-1">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            cum cumque assumenda ducimus repellendus aut possimus similique.
            Nisi, nihil tempore.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-12">
              <strong className="font-bold text-xl">Address:</strong>
              <p className="text-lg font-medium">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center gap-12">
              <strong className="font-bold text-xl">Hours:</strong>
              <p className="text-lg font-medium">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center gap-12">
              <strong className="font-bold text-xl">Contacts:</strong>
              <p className="text-lg font-medium">Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
        <div className="flex-1">
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
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
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
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
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
                className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                required
              />
            </div>
            <div>
              <label className="label">
                <strong className="label-text">Message</strong>
              </label>
              <textarea
                className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3] textarea  text-base xl:h-30 h-20"
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]">
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
