import "./nav.css";
import "./navResponsive.css";
import logo from "../../assets/logo.png";
import ModalA from "../modal/modal";
import { useState } from "react";

export default function NavA() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const onButtonClick = () => {
    console.log("clicked");
    setModalAbierto(!modalAbierto);
  };
  return (
    <>
      <ModalA estaAbierto={modalAbierto} onCloseClick={onButtonClick} />
      <nav>
        <img class="logo" src={logo} alt="logo NEXOS" />
        <ul>
          <li>
            <a class="listaDelNav" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a class="listaDelNav" href="#noticias">
              Noticias
            </a>
          </li>
          <li>
            <a class="listaDelNav" href="#contacto">
              Ayuda
            </a>
          </li>
        </ul>
        <div class="divDelBoton">
          <button class="boton trigger" onClick={onButtonClick}>
            INGRESAR
          </button>
        </div>
      </nav>
    </>
  );
}
