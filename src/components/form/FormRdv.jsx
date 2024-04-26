import { useState } from "react";
import { createRdv } from "../../../service/api";
import Calendar from "../calendar/Calendar.jsx";
import { EmailSender } from "../SendMails.jsx";
import styles from './formRdv.module.scss'
import { TitleH3 } from "../../atomes/titles/Ttitles.jsx";
import Btn from "../../atomes/buttons/Btn.jsx";
import { FaCalendarCheck } from "react-icons/fa6";
import { BiSolidErrorCircle } from "react-icons/bi";



const Formu = () => {
  const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);

  const emailSender = EmailSender();
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    entreprise: {
      nom: "",
      email_entreprise: "",
      chauffeur: "",
      camion_immatricule: "",
      modele: "",
      marque: "",
    },
    email_tbuster: "ijaouani.pro@outlook.fr",
    pont: {
      nom: "pont",
      //    date:""
    },
  });

  // const [isSlotFull, setIsSlotFull] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    if (nameParts.length === 2) {
      // Si le nom est sous la forme 'objet.propriété'
      setFormData((prevState) => ({
        ...prevState,
        [nameParts[0]]: {
          ...prevState[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const handleTimeSelect = (startTime, endTime) => {
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
    setFormData((prevState) => ({
      ...prevState,
      startDate: startTime,
      endDate: endTime,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); 
    try {
      console.log("les dataaa", formData);
      await createRdv(formData);
  
      setSuccessMessage("Rendez-vous créé avec succès! Email de confirmation envoyé");
  
      emailSender.sendEmailToEntreprise(formData);
      emailSender.sendEmailToTbuster(formData);
  
      setFormData({
        startDate: "",
        endDate: "",
        entreprise: {
          nom: "",
          email_entreprise: "",
          chauffeur: "",
          camion_immatricule: "",
          modele: "",
          marque: "",
        },
        email_tbuster: "ijaouani.pro@outlook.fr",
        pont: {
          nom: "pont",
        },
      });
  
      if (!isOpen) {
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      }
  
    } catch (error) {
      console.error(error);
  
      setSuccessMessage('');  
      setErrorMessage(
        "Erreur lors de la création du rdv OU créneau indisponible, ressayez svp."
      );
  
      if (!isOpen) {
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 50000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      {/* {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
      {isOpen && (
        <div className={styles.popup}>
          {successMessage && (
            <div className={styles.popup_content}>
              <FaCalendarCheck />
              <p>{successMessage}</p>
              <Btn linkto={"/"} text={"Accueil"} />
            </div>
          )}
          {errorMessage && (
            <div className={styles.popup_content}>
              <BiSolidErrorCircle />
              <p> {errorMessage} </p>
              <Btn linkto={"/"} text={"Reessayez"} />
            </div>
          )}
        </div>
      )}
      {/* datas rendez-vous */}
      <TitleH3 h3={"Selectionnez une date"} />
      <Calendar onTimeSelect={handleTimeSelect} />
      <TitleH3 h3={"Informations sur votre entreprise"} />
      <section>
        <label>
          Nom de l entreprise:
          <input
            placeholder="hey"
            type="text"
            name="entreprise.nom"
            value={formData.entreprise.nom}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
        <label>
          Email de l entreprise:
          <input
            type="email"
            name="entreprise.email_entreprise"
            value={formData.entreprise.email_entreprise}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
      </section>
      <TitleH3 h3={"Informations sur votre vehicule"} />
      <section>
        <label>
          Chauffeur:
          <input
            type="text"
            name="entreprise.chauffeur"
            value={formData.entreprise.chauffeur}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
        <label>
          Camion immatricule:
          <input
            type="text"
            name="entreprise.camion_immatricule"
            value={formData.entreprise.camion_immatricule}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
        <label>
          Modèle du camion:
          <input
            type="text"
            name="entreprise.modele"
            value={formData.entreprise.modele}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
        <label>
          Marque du camion:
          <input
            type="text"
            name="entreprise.marque"
            value={formData.entreprise.marque}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
      </section>
      <input
        type="hidden"
        // type="email"
        name="email_tbuster"
        value={formData.email_tbuster}
        onChange={handleChange}
      />
      <br /> <br />
      {/*  pont */}
      <input
        type="hidden"
        // type="text"
        name="pont.nom"
        value={formData.pont.nom}
        onChange={handleChange}
      />
      <br /> <br />
      <button
        className={`${styles.btnn} btn darkblue`}
        type="submit"
        value="Send"
      >
        Reserver
      </button>
    </form>
  );
};

export default Formu;
