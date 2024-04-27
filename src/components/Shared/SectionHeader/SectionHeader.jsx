import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
const SectionHeader = ({
  title = "Section Title",
  description = "Section description",
}) => {

  const {mode} = useContext(UserContext)
  return (
    <header className={`${mode ? 'text-gray-800' : "text-gray-400"} container mx-auto text-center space-y-2 py-7 max-w-3xl lg:mt-8`}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <p>{description}</p>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionHeader;
