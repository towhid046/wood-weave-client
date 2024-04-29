import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const MyHelmate = ({ title }) => {
  return (
    <Helmet>
      <title>WoodWeave | {title}</title>
    </Helmet>
  );
};

MyHelmate.propTypes = {
  title: PropTypes.string.isRequired,
};
export default MyHelmate;
