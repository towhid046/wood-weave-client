import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";
import faqImg from "../../../assets/images/faq.png";
import faqs from "./faqData";

const FAQSection = () => {
  return (
    <section id="faq" className="container mx-auto px-4 py-10">
      <SectionHeader
        title="Get Answers to Your Questions"
        description="Explore our FAQ section to find quick answers to common questions about our jute and wooden crafts. From product details to shipping information, we've got you covered. Save time and hassle by browsing through our FAQs to get the information you need, all in one place."
      />
      <div className="flex justify-between flex-col lg:flex-row items-center gap-10">
        <div>
          <img src={faqImg} alt="Faq img" />
        </div>
        <div className="flex-1">
          {faqs.map((faq) => (
            <div key={faq.id} className="collapse collapse-arrow shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-md font-bold text-custom-black ">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-custom-gray text-base font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
