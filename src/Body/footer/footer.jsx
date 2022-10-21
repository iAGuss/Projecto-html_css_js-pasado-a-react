import "./footer.css";
import "./footerResponsive.css";
import logoBlanco from "../../assets/logo-blanco.png";
import iconoFacebook from "../../assets/icono-facebook.png";
import iconoTwitter from "../../assets/icono-twitter.png";
import iconoInstagram from "../../assets/icono-instagram.png";

export default function footerA() {
  return (
    <footer>
      <hr />
      <div class="cosasDelFooter">
        <img class="imgDelFooter" src={logoBlanco} alt="NEXOS logo" />
        <ul>
          <li>
            <a class="listaDelFooter" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a class="listaDelFooter" href="#noticias">
              Noticias
            </a>
          </li>
          <li>
            <a class="listaDelFooter" href="#contacto">
              Ayuda
            </a>
          </li>
          <li>Términos y condiciones</li>
        </ul>
        <div class="seguinos">
          <span>Seguinos!</span>
          <div class="redes">
            <a href="https://www.facebook.com/NexosUy/">
              {" "}
              <img
                src={iconoFacebook}
                alt="facebook"
                height="25px"
                width="25px"
              />
            </a>
            <a href="https://twitter.com/nexosuruguay">
              {" "}
              <img
                src={iconoTwitter}
                alt="twitter"
                height="25px"
                width="25px"
              />
            </a>
            <a href="https://www.instagram.com/nexosuy/?hl=es">
              <img
                src={iconoInstagram}
                alt="instagram"
                height="23px"
                width="23px"
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p>Copyright © 2021 All rights reserved</p>
    </footer>
  );
}
