import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useLanguage } from "../../context/languageContext";
import { getColorCssVariable } from "../../utils/utils";
import { useState } from "react";
import "./styles.css";
import DraggableItemsBox from "../draggableItemsBox";

function AboutModal1() {
  const { t } = useLanguage();
  return (
    <div>
      <Text>{t("motivationLetter")} </Text>
    </div>
  );
}

function AboutModal2() {
  return <DraggableItemsBox />;
}

function About() {
  const { t } = useLanguage();
  const [aboutModal, setAboutModal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenModal = (index) => {
    onOpen();
    setAboutModal(index);
  };
  //0: none
  //1: meAsCoder
  //2. besidesOfCode
  return (
    <div className="aboutContainer">
      <Divider bgColor={getColorCssVariable("grey")} marginBottom={"20px"} />
      <HStack justifyContent={"space-around"}>
        <Text fontSize={"lg"} as={"b"}>
          {t("aboutMe")}{" "}
        </Text>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme={"purple"} onClick={() => onOpenModal(1)}>
            {t("meAsCoder")}
          </Button>
          <Button onClick={() => onOpenModal(2)}>{t("besidesOfCode")}</Button>
        </ButtonGroup>
      </HStack>

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
    </div>
  );
}

export default About;
