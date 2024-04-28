
const ContactInfo = () => {
    return (
        <div className="space-y-3">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <hr className="w-20 border-2" />
        <p>
        Feel free to reach out to us with any questions, feedback, or inquiries you may have. We're here to assist you in any way we can.
        </p>
        <div className="flex md:gap-20 flex-wrap gap-7">
          <ul className="text-md font-semibold">
            <li>Address:</li>
            <li className="mt-4 mb-7">Hours:</li>
            <li>Contacts:</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>223 Craftsman Lane, Asheville, North Carolina</li>
            <li>
              Monday - Saturday, 11 AM - 9 PM <br />
              Sunday: 11 AM - 7 PM
            </li>
            <li>+11 23456789123 <br /> xyz123@gmail.com</li>
          </ul>
        </div>
      </div>
    );
};

export default ContactInfo;