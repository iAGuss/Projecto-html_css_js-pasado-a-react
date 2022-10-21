import "./contacto.css";
import "./contactoResponsive.css";
import laptopEscritorio from "../../assets/laptop-escritorio.jpg";

export default function contacto() {
  return (
    <article id="contacto">
      <img class="contactoImagen" src={laptopEscritorio} alt="contacto" />
      <div class="contactoForm">
        <h1>Contacto</h1>
        <div class="conteinerContacto">
          <div class="izqContacto">
            <span>
              <p>Texto dato</p>
            </span>
            <span>
              <input type="text" placeholder="Dato a completar" />
            </span>
            <span>
              <p>Texto dato</p>
            </span>
            <span>
              <input type="text" placeholder="Dato a completar" />
            </span>
          </div>
          <div class="derContacto">
            <p>Mensaje</p>
            <textarea
              name=""
              id=""
              cols="39"
              rows="6"
              placeholder="Escribe tu manesaje aqui..."
            ></textarea>
          </div>
        </div>
        <span class="spanDelBoton">
          <button class="boton">ENVIAR</button>
        </span>
      </div>
    </article>
  );
}
