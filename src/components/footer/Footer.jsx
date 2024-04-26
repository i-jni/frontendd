import styles from "./footer.module.scss";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4 className={styles.logo}>TRUCKBUSTER</h4>
            <ul>
              <li>
                <a href="/">A propos</a>
              </li>
              <li>
                <a href="/confidentialite">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Informations</h4>
            <ul>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/mentions_legales">Mentions legales</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Liens pratiques</h4>
            <ul>
              <li>
                <a href="/register">Prendre rendez-vous</a>
              </li>
              <li>
                <a href="/login">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Suivez-nous</h4>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/">
                <i>
                  <RiTwitterXFill />
                </i>
              </a>
              <a href="https://www.instagram.com/">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="https://www.facebook.com/">
                <i>
                  <FaFacebookF />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
