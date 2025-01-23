import { Select } from "@chakra-ui/react";
import { MdTranslate } from "react-icons/md";
import { useLanguage } from "../../context/languageContext";
import "./styles.css";

function LanSelector() {
  let { setLanguage } = useLanguage();

  const lanList = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
  ];

  const changeLanguage = (event) => {
    let option = event.target.value;
    setLanguage(option);
  };
  return (
    <div className="lanSelectorContainer">
      <Select icon={<MdTranslate />} onChange={changeLanguage}>
        {lanList.map((lan) => {
          return (
            <option key={lan.value} value={lan.value}>
              {lan.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

export default LanSelector;
