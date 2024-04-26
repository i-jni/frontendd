import styles from "./header.module.scss";

const Header = () => {
  return (
    <section className={styles.header_container}>
      <h1> TRUCKBUSTER </h1>

      <div>
        <img src="/images/techniciens.png" alt="mecaniciens" />

        {/* <div className={styles.text_container}> */}
        <h2>
          Un contrôle technique précis, une tranquillité assurée!
        </h2>
          </div>
       
    </section>
  );
};

export default Header;
