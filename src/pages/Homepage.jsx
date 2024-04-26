import { useEffect, useState } from "react";
import { TitleH2 } from "../atomes/titles/Ttitles";
import { getRdvs } from "../../service/api";
import Calendar from "../components/calendar/Calendar";

const Homepage = () => {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    getRdvs()
      .then((data) => {
        setRdvs(data);
        console.log("data", data[1]);
      })
      .catch((error) =>
        console.error(
          `Erreur lors de la récupération des rdv: ${error.message}`
        )
      );
  }, []);

  return (
    <>
      <Calendar />

      <TitleH2 h2="Hey" />
      <ul>
        {rdvs.map((rdv) => (
          <li key={rdv._id}>
            <h3>nom etp: {rdv?.entreprise?.nom}</h3>
            <p>- Email de l entreprise : {rdv.entreprise.email_entreprise}</p>
            <p>- Chauffeur : {rdv.entreprise.chauffeur}</p>
            <p>- Camion immatriculé : {rdv.entreprise.camion_immatricule}</p>
            <p>- Modèle du camion : {rdv.entreprise.modele}</p>
            <p>- Marque du camion : {rdv.entreprise.marque}</p>
            {rdv.pont && (
              <>
                <p>Pont NOM: {rdv.pont.nom}</p>
              </>
            )}

            {/* ::::rdv info:::: */}
            <p>- Start Date rdv: {new Date(rdv?.startDate).toLocaleString()}</p>
            <p>- End Date rdv: {new Date(rdv?.endDate).toLocaleString()}</p>
            <p>- Email Tbuser rdv: {rdv?.email_tbuster}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homepage;

