import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import {
  BsFillEnvelopeAtFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import "./contact.css";
import { useLanguage } from "../../context/languageContext";

function Contact() {
  const { t } = useLanguage();

  const getImgList = () => {
    let img = [];
    for (let i = 1; i <= 14; i++) {
      img.push(`IMG_${i}.jpg`);
    }
    return img;
  };
  const imgOriginal = getImgList();

  const img = Array(3).fill(imgOriginal).flat();

  const contactList = [
    {
      id: 1,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/hongyu-lu-b86b44115/",
      icon: BsLinkedin,
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/hongyulu-github",
      icon: BsGithub,
    },
    {
      id: 3,
      title: "Twitter",
      link: "https://twitter.com/HongyuLulu",
      icon: BsTwitter,
    },
    {
      id: 4,
      title: "Email",
      link: "mailto:hongyu.lu_cn@outlook.com",
      icon: BsFillEnvelopeAtFill,
    },
  ];
  return (
    <div className="contactContainer">
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
      <HStack spacing={"40px"}>
        {contactList.map((contact) => (
          <div key={contact.id}>
            <a href={contact.link} target="_blank">
              <Icon className="icon" boxSize="60px" as={contact.icon} />
            </a>
          </div>
        ))}
      </HStack>
      <Text color="purple" fontSize={"3xl"} as="b">
        {t("contactMe")}
      </Text>
    </div>
  );
}

export default Contact;
