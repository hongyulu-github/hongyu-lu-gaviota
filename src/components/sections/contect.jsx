import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  BsFillEnvelopeAtFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { useLanguage } from "../../context/languageContext";
import "./contact.css";

function Contact() {
  const { t } = useLanguage();

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
