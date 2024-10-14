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
        <p>China</p>
        <p>Hispanic Studies (university in China)</p>
        <p>C1 level of Spanish</p>
        <p>Spanish culture</p>
        <p>Studying Literature in Spain</p>
        <p>
          Master's in Language and Literature Studies (Universitat de València)
        </p>
      </div>
    ),
  },
  {
    content: (
      <div key="2" className="info-card">
        <p>Worked in Bolivia for 2 years</p>
        <p>Interpreter / accounting assistant</p>
        <p>Road construction company</p>
        <p>Improving Spanish / Accounting</p>
        <p></p>
        <p>Educational program in Spain</p>
        <p>Teaching Chinese at the EOI (Official School of Languages)</p>
        <p>Studying programming</p>
      </div>
    ),
  },
];

const geekList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>China</p>
        <p>Estudios Hispánicos (universidad en China)</p>
        <p>Nivel C1 de castellano</p>
        <p>Cultura española</p>
        <p>Estudiar Literatura en España</p>
        <p>
          Máster en Estudios de Lenguas y Literaturas (Universitat de València)
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

const whyProgrammingList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>China</p>
        <p>Estudios Hispánicos (universidad en China)</p>
        <p>Nivel C1 de castellano</p>
        <p>Cultura española</p>
        <p>Estudiar Literatura en España</p>
        <p>
          Máster en Estudios de Lenguas y Literaturas (Universitat de València)
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

const mbtiList: SlideItemProps[] = [
  {
    content: (
      <div key="1" className="info-card">
        <p>China</p>
        <p>Estudios Hispánicos (universidad en China)</p>
        <p>Nivel C1 de castellano</p>
        <p>Cultura española</p>
        <p>Estudiar Literatura en España</p>
        <p>
          Máster en Estudios de Lenguas y Literaturas (Universitat de València)
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
    keyWord: "Geek?",
    color: "#33FF57",
    r: "-25deg",
    tx: "300px",
    ty: "-15px",
    content: <Slide contentList={geekList} />,
  },
  {
    keyWord: "Why programming?",
    color: "#3357FF",
    r: "-22deg",
    tx: "300px",
    ty: "-0px",
    content: <Slide contentList={whyProgrammingList} />,
  },
  {
    keyWord: "MBTI personality test",
    color: "#FF33A6",
    r: "-20deg",
    tx: "300px",
    ty: "15px",
    content: <Slide contentList={mbtiList} />,
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
              opacity="80%"
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
