import { Avatar, Heading } from "@chakra-ui/react";
import { useLanguage } from "../../context/languageContext";
import LanSelector from "../lanSelector";
import "./upper.css";

function Upper() {
  const { t, language } = useLanguage();
  return (
    <div className="upperContainer">
      <Avatar name="Dan Abrahmov" src="hongyu-lu.jpg" />
      <Heading>{t("hongyulu", language)}</Heading>
      <LanSelector />
    </div>
  );
}

export default Upper;
