import SectionHeader from "./../../Shared/SectionHeader/SectionHeader";
import faqImg from "../../../assets/images/faq.png";
const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      title: " Hockey Training",
      description: ` Immerse yourself in our comprehensive hockey training programs.
      Our skilled coaches and state-of-the-art facilities are
      dedicated to refining your skills and taking your game to the
      next level.`,
    },
    {
      id: 2,
      title: " Hockey Training",
      description: ` Immerse yourself in our comprehensive hockey training programs.
      Our skilled coaches and state-of-the-art facilities are
      dedicated to refining your skills and taking your game to the
      next level.`,
    },
    {
      id: 3,
      title: " Hockey Training",
      description: ` Immerse yourself in our comprehensive hockey training programs.
      Our skilled coaches and state-of-the-art facilities are
      dedicated to refining your skills and taking your game to the
      next level.`,
    },
    {
      id: 4,
      title: " Hockey Training",
      description: ` Immerse yourself in our comprehensive hockey training programs.
      Our skilled coaches and state-of-the-art facilities are
      dedicated to refining your skills and taking your game to the
      next level.`,
    },
    
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <SectionHeader />
      <div className="flex justify-between flex-col lg:flex-row items-center gap-10">
        <div>
          <img src={faqImg} alt="Faq img" />
        </div>
        <div className="flex-1">
          {faqs.map((faq) => (
            <div key={faq.id} className="collapse collapse-arrow shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-bold text-custom-black ">
                {faq.title}
              </div>
              <div className="collapse-content">
                <p className="text-custom-gray text-base font-normal">
                  {faq.description}
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
