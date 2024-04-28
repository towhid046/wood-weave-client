import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";
import ContactInfo from "./../ContactInfo/ContactInfo";
import ContactForm from "./../ContactForm/ContactForm";
import MapLeaflet from "./../MapLeaflet/MapLeaflet";
import {Slide} from 'react-awesome-reveal'

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-10 mb-10">
      <SectionHeader
        title="Reach Out to Us"
        description="Contact Us for any inquiries, feedback, or assistance. We're here to help! Simply fill out the form below or reach us through phone or email. We value your input and look forward to hearing from you."
      />
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 space-y-3">
          <Slide>
          <ContactInfo />
          <MapLeaflet />
          </Slide>
        </div>
        <div className="flex-1">
        <Slide direction="right">
        <ContactForm />
        </Slide>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
