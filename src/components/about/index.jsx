import {
  Button,
  ButtonGroup,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { getColorCssVariable } from "../../utils/utils";
import HobbyGrid from "../hobbyGrid";
import "./styles.css";

function AboutModal1() {
  const { t } = useLanguage();
  return (
    <div>
      <Text>{t("motivationLetter")} </Text>
    </div>
  );
}

function AboutModal2() {
  return <HobbyGrid />;
}

function About() {
  const { t } = useLanguage();
  const [aboutModal, setAboutModal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAttached = useBreakpointValue({ base: true, md: false });

  const getImgList = () => {
    let img = [];
    for (let i = 1; i <= 28; i++) {
      img.push(`IMG_${i}.jpg`);
    }
    return img;
  };
  const imgOriginal = getImgList();

  const img = Array(3).fill(imgOriginal).flat();

  const onOpenModal = (index) => {
    onOpen();
    setAboutModal(index);
  };
  //0: none
  //1: meAsCoder
  //2. besidesCoding
  return (
    <div className="aboutContainer">
      <Divider bgColor={getColorCssVariable("grey")} marginBottom={"20px"} />
      <Stack justifyContent={"space-around"} direction={["column", "row"]}>
        <Text fontSize={"lg"} as={"b"}>
          {t("aboutMe")}{" "}
        </Text>
        <ButtonGroup variant="outline" spacing="6" isAttached={isAttached}>
          <Button colorScheme={"purple"} onClick={() => onOpenModal(1)}>
            {t("meAsCoder")}
          </Button>
          <Button onClick={() => onOpenModal(2)}>{t("besidesCoding")}</Button>
        </ButtonGroup>
      </Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton onClick={() => setAboutModal(0)} />
          <ModalBody>
            {aboutModal === 1 ? (
              <AboutModal1 />
            ) : aboutModal === 2 ? (
              <AboutModal2 />
            ) : (
              <></>
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
      <Divider bgColor={getColorCssVariable("grey")} marginTop={"20px"} />
      <div className="imgRolling">
        {img.map((img, index) => (
          <Image
            h={"300px"}
            w={"200px"}
            src={img}
            key={index}
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
}

export default About;
