import "./noticias.css";
import "./noticiasResponsive.css";
import iconoCalendario from "../../assets/icono-calendario.png";
import iconoReloj from "../../assets/icono-reloj.png";
import iconoFlecha from "../../assets/icono-flecha.png";
import noticiasUno from "../../assets/noticiasUno.jpg";
import noticiasDos from "../../assets/noticiasDos.jpg";
import noticiasTres from "../../assets/noticiasTres.jpg";
import noticiasCuatro from "../../assets/noticiasCuatro.jpg";

export default function noticiasA() {
  return (
    <article id="noticias">
      <h1>Noticias</h1>
      <p>
        <a href="#link">ver todo</a>
      </p>
      <section class="carrusel">
        <ul class="c">
          <item class="noticiaUno">
            <div class="noticiaUnoArriba">
              <img class="noticiaUnoArribaImg" src={noticiasUno} alt="" />
              <div class="etiquetas">ANIMALES</div>
            </div>
            <div class="noticiaUnoAbajo">
              <div class="infoUno">
                <span class="fecha">
                  <img
                    height="21px"
                    width="19px"
                    src={iconoCalendario}
                    alt=""
                  />
                  <p>10/08/2021</p>
                </span>
                <span class="hora">
                  <img height="21px" width="21px" src={iconoReloj} alt="" />
                  <p>4 min</p>
                </span>
              </div>
              <div class="infoDos">
                <h3>Fundappas abre nuevo centro</h3>
                <p>
                  El nuevo centro estará ubicado dentro del predio municiapl
                  Parque Rivera. La inauguración de centro contara con la
                  presencia de la intendenta Carolinna ...
                </p>
              </div>
              <div class="verMas">
                <img width="15px" height="12px" src={iconoFlecha} alt="" />
                <p>ver más</p>
              </div>
            </div>
          </item>
          <item class="noticiaDos">
            <div class="noticiaUnoArriba">
              <img class="noticiaUnoArribaImg" src={noticiasDos} alt="" />
              <div class="etiquetas">URUGUAY</div>
            </div>
            <div class="noticiaUnoAbajo">
              <div class="infoUno">
                <span class="fecha">
                  <img
                    height="21px"
                    width="19px"
                    src={iconoCalendario}
                    alt=""
                  />
                  <p>10/08/2021</p>
                </span>
                <span class="hora">
                  <img height="21px" width="21px" src={iconoReloj} alt="" />
                  <p>4 min</p>
                </span>
              </div>
              <div class="infoDos">
                <h3>DIRECTV Y TECHO inauguraron un espacio deportivo</h3>
                <p>
                  Los vecinos del lugar recibieron con alegría la concreción de
                  este proyecto, que busca promover la socialización y la
                  actividad física...
                </p>
              </div>
              <div class="verMas">
                <img width="15px" height="12px" src={iconoFlecha} alt="" />
                <p>ver más</p>
              </div>
            </div>
          </item>
          <item class="noticiaTres">
            <div class="noticiaUnoArriba">
              <img class="noticiaUnoArribaImg" src={noticiasTres} alt="" />
              <div class="etiquetaVoluntariado">VOLUNTARIADO</div>
            </div>
            <div class="noticiaUnoAbajo">
              <div class="infoUno">
                <span class="fecha">
                  <img
                    height="21px"
                    width="19px"
                    src={iconoCalendario}
                    alt=""
                  />
                  <p>10/08/2021</p>
                </span>
                <span class="hora">
                  <img height="21px" width="21px" src={iconoReloj} alt="" />
                  <p>3 min</p>
                </span>
              </div>
              <div class="infoDos">
                <h3>Jornada de voluntarios</h3>
                <p>
                  Se realizó una nueva jornada de voluntarios Remer. El
                  encuentro tuvo parte en el departamento de Montevideo y
                  contó...
                </p>
              </div>
              <div class="verMas">
                <img width="15px" height="12px" src={iconoFlecha} alt="" />
                <p>ver más</p>
              </div>
            </div>
          </item>
          <item class="noticiaCuatro">
            <div class="noticiaUnoArriba">
              <img class="noticiaUnoArribaImg" src={noticiasCuatro} alt="" />
              <div class="etiquetas">URUGUAY</div>
            </div>
            <div class="noticiaUnoAbajo">
              <div class="infoUno">
                <span class="fecha">
                  <img
                    height="21px"
                    width="19px"
                    src={iconoCalendario}
                    alt=""
                  />
                  <p>10/08/2021</p>
                </span>
                <span class="hora">
                  <img height="21px" width="21px" src={iconoReloj} alt="" />
                  <p>5 min</p>
                </span>
              </div>
              <div class="infoDos">
                <h3>Lanzamiento del plan Tu Techo</h3>
                <p>
                  Techo Uruguay informó su nuevo plan de acción para el segundo
                  semestre del año.
                </p>
              </div>
              <div class="verMas">
                <img width="15px" height="12px" src={iconoFlecha} alt="" />
                <p>ver más</p>
              </div>
            </div>
          </item>
        </ul>
      </section>
    </article>
  );
}
