import PropTypes from "prop-types";
const SectionHeader = ({
  title = "Section Title",
  description = "Section description",
}) => {
  return (
    <header className="container mx-auto text-center space-y-2 py-7 max-w-3xl">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p>{description}</p>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
