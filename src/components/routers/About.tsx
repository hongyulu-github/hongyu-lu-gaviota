import { Center, HStack, ScaleFade, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "./About.css";
import Slide, { SlideItemProps } from "../Slide";

interface Props {
  keyWord: string;
  color: string;
  r: string;
  tx: string;
  ty: string;
  onClick: () => void;
}

const spanishAndMeList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>
          Mi conexión con el español ha sido una aventura increíble que combina
          estudio, trabajo y experiencias culturales. Todo empezó en China,
          donde estudié Estudios Hispánicos en la universidad y alcancé un nivel
          C1 en el idioma. Durante esa etapa, también descubrí mi interés por la
          cultura y la literatura españolas, lo que me llevó a estudiar
          Literatura en España y, más tarde, a hacer un máster en Lengua y
          Literatura en la Universitat de València.
          <br />
          En lo laboral, tuve la suerte de vivir en Bolivia durante dos años,
          trabajando como intérprete y asistente contable para una empresa de
          construcción de carreteras. Fue una experiencia que no solo mejoró
          mucho mi español, sino que también me enseñó bastante sobre
          contabilidad en un entorno hispanohablante. Después, en España,
          participé en un programa educativo enseñando chino en la Escuela
          Oficial de Idiomas (EOI). Al mismo tiempo, aproveché para estudiar
          programación y seguir aprendiendo cosas nuevas.
        </p>
      </div>
    ),
  },
];

const whyProgrammingList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>
          Me decidí a aprender programación porque me encanta resolver problemas
          y encontrar soluciones creativas. Además, es una forma de trabajar en
          equipo y construir cosas que realmente pueden marcar la diferencia.
          También me da mucha satisfacción personal ver cómo mis habilidades van
          creciendo y cómo puedo usar lo que aprendo para crear algo útil.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div key="2" className="info-card">
        <p>Billdin</p>
        <p>React + React Native</p>
        <p>Dos modules importantes </p>
      </div>
    ),
  },
];

const geekList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>Sci-Fi</p>
        <p>Doctor Who/ Matrix/ Interstellar</p>
        <p>Nerdy</p>
        <p>LOTR/ IT Crowd/ JOJO</p>
      </div>
    ),
  },
  {
    content: (
      <div key="2" className="info-card drawing">
        <img src="/IMG_2881.jpg" />
        <img src="/IMG_0383.JPG" />
        <img src="/IMG_2009.jpg" />
        <img src="/IMG_5223.jpg" />
      </div>
    ),
  },
];

const personalityList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>
          Me considero una persona empática, siempre intento entender y conectar
          con los demás. <br />
          Soy honesta y valoro mucho la verdad en todas las situaciones. También
          me gusta ser de mente abierta, escuchar diferentes ideas y aprender de
          otras perspectivas.
          <br />
          Por último, soy alguien apasionado por lo que hace; cuando algo me
          importa, me esfuerzo al máximo para dar lo mejor de mí.
        </p>
      </div>
    ),
  },
];

const keyWordList = [
  {
    keyWord: "Spanish Language & me",
    color: "#FF5733",
    r: "-30deg",
    tx: "300px",
    ty: "-20px",
    content: <Slide contentList={spanishAndMeList} />,
  },
  {
    keyWord: "Why programming?",
    color: "#3357FF",
    r: "-25deg",
    tx: "300px",
    ty: "-15px",
    content: <Slide contentList={whyProgrammingList} />,
  },
  {
    keyWord: "Geek? Nerd?",
    color: "#33FF57",

    r: "-22deg",
    tx: "300px",
    ty: "-0px",
    content: <Slide contentList={geekList} />,
  },
  {
    keyWord: "Personality",
    color: "#FF33A6",
    r: "-20deg",
    tx: "300px",
    ty: "15px",
    content: <Slide contentList={personalityList} />,
  },
];

const KeyWordModal = ({ keyWord, r, tx, ty, onClick }: Props) => {
  return (
    <div
      className="keyWordBallContainer"
      style={{
        transform: `rotate(${r}) translate(${tx},${ty})`,
      }}
      onClick={onClick}
    >
      {keyWord}
    </div>
  );
};

const About = () => {
  const [selectedKeyWord, setSelectedKeyWord] = useState<number | undefined>(
    undefined
  );

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setSelectedKeyWord(undefined);
    }
  };
  return (
    <>
      {selectedKeyWord ? (
        <HStack
          height="100%"
          className="aboutContainer"
          // style={{ backgroundImage: `url("pink.jpg")` }}
        >
          <ScaleFade initialScale={0.9} in={selectedKeyWord !== 0}>
            <Center
              ref={ref}
              w="80vw"
              h="90vh"
              color="black"
              mt="4"
              bg="white"
              rounded="md"
              shadow="md"
            >
              {keyWordList[selectedKeyWord - 1].content}
            </Center>
          </ScaleFade>
        </HStack>
      ) : (
        <HStack
          height="100%"
          className="aboutContainer"
          style={{
            filter: selectedKeyWord ? "blur(8px)" : "",
            // backgroundImage: `url("pink.jpg")`,
          }}
        >
          <Text className="whoAmI">Who am I?</Text>
          {keyWordList.map((k, i) => {
            return (
              <KeyWordModal
                keyWord={k.keyWord}
                color={k.color}
                r={k.r}
                tx={k.tx}
                ty={k.ty}
                onClick={() => setSelectedKeyWord(i + 1)}
              />
            );
          })}
        </HStack>
      )}

      {/* <HStack margin="100px 9%" flexDirection="column">
        <NextPage
          nextPageLink="/contact"
          message="Si quieres conocer la versión divertida y misteriosa detrás de esta sonrisa, ¡ponte en contacto y desbloqueemos la diversión!😁🔓"
        />
      </HStack> */}
    </>
  );
};

export default About;
