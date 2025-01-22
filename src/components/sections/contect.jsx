import { Box, HStack, Icon, Image } from "@chakra-ui/react";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Contact() {
  const imgOriginal = [
    "IMG_1.jpg",
    "IMG_2.jpg",
    "IMG_3.jpg",
    "IMG_4.jpg",
    "IMG_5.jpg",
    "IMG_6.jpg",
    "IMG_7.jpg",
    "IMG_8.jpg",
  ];
  const img = Array(10).fill(imgOriginal).flat();

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
    </div>
  );
}

export default Contact;
