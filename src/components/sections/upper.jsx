import { Avatar } from "@chakra-ui/react";
import { useLanguage } from "../../context/languageContext";
import LanSelector from "../lanSelector";
import "./upper.css";

function Upper() {
  const { t } = useLanguage();
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div className="upperContainer">
      <Avatar
        cursor={"pointer"}
        name={t("hongyulu")}
        src="hongyu-lu.jpg"
        onClick={scrollToBottom}
      />
      <LanSelector />
    </div>
  );
}

export default Upper;
