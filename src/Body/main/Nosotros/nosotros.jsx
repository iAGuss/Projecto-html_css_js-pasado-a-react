import "./nosotros.css";
import "./nosotrosResponsive.css";
import React from "react";
import oficina from "./oficina.png";
import voluntariado from "./voluntariado.jpg";
import iconoMano from "./icono-mano.png";
import iconoManoCorazon from "./icono-mano-corazon.png";
import iconoReciclar from "./icono-reciclar.png";
import iconoMaletin from "./icono-maletin.png";
import iconoMas from "./icono-mas.png";

export default function nosotrosA() {
  return (
    <article id="nosotros">
      <section class="fondoAzul">
        <div class="izqFondoAzul">
          <div class="divDeOficina">
            <img class="oficina" src={oficina} alt="oficina" />
          </div>
          <div class="textosIzq">
            <h2 class="h2AzulIzq">Soluciones para organizaciones</h2>
            <p class="parrafoAzulIzq">
              Apoyamos a las organizaciones sociales para que alcancen sus
              objetivos. Ponemos a su disposición una comunidad de voluntarios
              dispuestos a apoyarlas en sus necesidades. <br />
              Equipos de voluntarios por empresas dispuestos a potenciar tu
              impacto en la sociedad.
            </p>
          </div>
        </div>
        <div class="derFondoAzul">
          <div class="textosDer">
            <h2 class="h2AzulDer">Soluciones para empresas</h2>
            <p class="parrafoAzulDer">
              Generamos un medio para que las empresas se involucren en
              actividades de responsabilidad social. <br />
              ¡Creá un grupo de voluntarios en tu organizaciónn y se parte del
              cambio!
            </p>
          </div>
          <div class="divDeVoluntariado">
            <img class="voluntariado" src={voluntariado} alt="voluntariado" />
          </div>
        </div>
      </section>
      <section class="fondoBlanco">
        <div class="textoDeFondoBlanco">
          <h2>Encuentra las mejores oportunidades</h2>
          <p>
            La plataforma cuenta con gran variedad de proyectos locales
            (sociales, educativos y medioambientales), donde encontrarás el que
            mejor se adapte a la experiencia que estas buscando. <br />
            Te ayudaremos en la coordinación con la organización de forma simple
            y rápida
          </p>
        </div>
        <div class="conteinerDeImagenes">
          <div class="rojo">
            <div class="contenedorDeColores">
              <img class="imgsDeContenedores" src={iconoMano} alt="mano" />
              <img class="mas" src={iconoMas} alt="" />
            </div>
            <p>Ser voluntario</p>
          </div>
          <div class="amarillo">
            <div class="contenedorDeColores">
              <img
                class="imgsDeContenedores"
                src={iconoManoCorazon}
                alt="mano corazon"
              />
              <img class="mas" src={iconoMas} alt="" />
            </div>
            <p>Donar</p>
          </div>
          <div class="verde">
            <div class="contenedorDeColores">
              <img
                class="imgsDeContenedores"
                src={iconoReciclar}
                alt="reciclar"
              />
              <img class="mas" src={iconoMas} alt="" />
            </div>
            <p>Reciclar</p>
          </div>
          <div class="celeste">
            <div class="contenedorDeColores">
              <img
                class="imgsDeContenedores"
                src={iconoMaletin}
                alt="maletin"
              />
              <img class="mas" src={iconoMas} alt="" />
            </div>
            <p>Llamadas laborales</p>
          </div>
        </div>
      </section>
    </article>
  );
}
