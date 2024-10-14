import Slide, { SlideItemProps } from "./Slide";
import "./SpainishAndMe.css";
import "react-slideshow-image/dist/styles.css";

const SpainishAndMe = () => {
  const spainishAndMeList: SlideItemProps[] = [
    {
      content: (
        <div key="1" className="info-card">
          <p>China</p>
          <p>Estudios Hispánicos (universidad en China)</p>
          <p>Nivel C1 de castellano</p>
          <p>Cultura española</p>
          <p>Estudiar Literatura en España</p>
          <p>
            Máster en Estudios de Lenguas y Literaturas (Universitat de
            València)
          </p>
        </div>
      ),
    },
    {
      content: (
        <div key="2" className="info-card">
          <p>Trabajo en Bolivia por 2 años</p>
          <p>Intérprete / auxiliar de contable</p>
          <p>Empresa de construcción de carretera</p>
          <p>Mejorando castellano / Contabilidad</p>
          <p></p>
          <p>Programa educativo en España</p>
          <p>Enseñando chino en la EOI</p>
          <p>Estudiar programación</p>
        </div>
      ),
    },
  ];

  return <Slide contentList={spainishAndMeList} />;
};

export default SpainishAndMe;
