import PropTypes from "prop-types";
import styles from "./textmedia.module.scss";

const TextMedia = ({ imageUrl, text }) => (
  <div className={`${styles.textImageContainer} centered`}>
    <p className={styles.text}>{text}</p>
    <img className={styles.image} src={imageUrl} alt="image" />
  </div>
);

TextMedia.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextMedia;
