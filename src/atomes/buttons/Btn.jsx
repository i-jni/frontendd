

import { Link } from "react-router-dom";
import styles from "./btn.module.scss";

const Btn = ({ text, linkto }) => {


  return (
    <div className={styles.btn_primary}>
      <Link to={linkto}>
        <button  type="button">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Btn;
