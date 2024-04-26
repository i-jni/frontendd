
import { TitleH1, TitleH2 } from "../atomes/titles/Ttitles";
import Formu from "../components/form/FormRdv";
import Onglet from "../components/onglet/Onglet";
import TextMedia from "../components/textmedia/TextMedia";



const Home= () => {
 


  return (
    <main>
      <TitleH1 h1={"Prendre rendez-vous"} />
      <Onglet />
      <Formu />

      <TextMedia
        text="A bientôt"
        imageUrl="/images/tech2.png"
      />
    </main>
  );
};

export default Home;
