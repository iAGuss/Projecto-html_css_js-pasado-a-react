import "./modal.css";
import iconoFlechaReverse from "../../assets/icono-flecha-reverse.png";
import iconoMaletin2 from "../../assets/icono-maletin-2.png";
import iconoFlecha from "../../assets/icono-flecha.png";
import iconoPersona from "../../assets/icono-persona.png";

export default function ModalA({ estaAbierto, onCloseClick }) {
  let claseModal = "modal";
  if (estaAbierto) {
    claseModal += " show-modal";
  }
  return (
    <div class={claseModal}>
      <div class="modal-content">
        <div class="modalIzq"></div>
        <div class="modalDer">
          <div class="lineaUno">
            <div class="flechita">
              <img
                class="atrass"
                src={iconoFlechaReverse}
                onClick={onCloseClick}
                alt="flecha"
              />
              <p>Volver atrás</p>
            </div>
            <span class="close-button" onClick={onCloseClick}>
              &times;
            </span>
          </div>
          <h1 class="tituloModal">REGISTRAR</h1>
          <div class="bloqueMiEmpresa">
            <span class="azul">
              <img width="40px" height="43px" src={iconoMaletin2} alt="" />
            </span>
            <span class="textoBloqueMiEmpresa">
              <h1 class="tituloMiEmpresa">MI EMPRESA</h1>
              <p>Breve explicación a lo que nos referimos.</p>
              <div class="flechaDeBloques">
                <img src={iconoFlecha} alt="" />
              </div>
            </span>
          </div>
          <div class="bloqueMiOrganizacion">
            <div class="violeta">
              <img width="40px" height="43px" src={iconoPersona} alt="" />
            </div>
            <div class="textoBloqueMiOrganizacion">
              <h1 class="tituloMiOrganizacion">MI ORGANIZACIÓn</h1>
              <p>Estamos para ayudarlos a tener éxito</p>
              <div class="flechaDeBloques">
                <img src={iconoFlecha} alt="icono de flecha" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
