import "./body.css";
import "./bodyResponsive.css";
import Header from "./header/header.jsx";
import Nav from "./nav/nav.jsx";
import Nosotros from "./main/Nosotros/nosotros.jsx";
import Noticias from "./noticias/noticias.jsx";
import Contacto from "./contacto/contacto.jsx";
import Footer from "./footer/footer.jsx";
import Modal from "./modal/modal.jsx";

export default function BodyA() {
  return (
    <>
      <Modal />
      <Nav />
      <Header />
      <Nosotros />
      <Noticias />
      <Contacto />
      <Footer />
    </>
  );
}
