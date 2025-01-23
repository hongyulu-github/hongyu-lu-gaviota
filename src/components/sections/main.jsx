import { Box, Code, Stack, VStack } from "@chakra-ui/react";
import { useLanguage } from "../../context/languageContext";

import Project from "../project";
import "./main.css";
import About from "../about";

function WelcomeBox() {
  const { t } = useLanguage();

  return (
    <>
      <div className="welcomeBoxContainerPlaceholder" />
      <div className="welcomeBoxContainer">
        <Box className="welcomeBox" w="800px">
          <Stack direction="column">
            <Code children={`const ${t("name")} = '${t("hongyulu")}'`} />
            <Code
              children={`let ${t("title")} = '${t("frontendDeveloper")}'`}
            />
            <Code
              children={`let ${t(
                "techStack"
              )} = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "ReactNative", "Vitest"]`}
            />
            <Code children={`techStack.push("${t("newSkills")}...")`} />
            <Code
              colorScheme="red"
              children={` const ${t("greet")} = () => console.log(\`${t(
                "welcomeToPortfolio"
              )} \${name}\`)`}
            />
            <Code colorScheme="yellow" children={`${t("greet")}()`} />
            <Code
              colorScheme="blue"
              children={`function()
              // ${t("scrollToknowMore")}
              })();`}
            />
          </Stack>
        </Box>
      </div>
    </>
  );
}
function ProjectStack() {
  const { t } = useLanguage();
  const projectslist = [
    {
      title: "Pomodoro Timer",
      subtitle: t("subtitlePomodoroTimer"),
      image: "/pomodoro-timer.png",
      link: "https://pomodoro-timer-hylu.vercel.app/",
    },
    {
      title: "Game Hub",
      subtitle: t("subtitleGameHub"),
      image: "/game-hub.png",
      link: "https://game-hub-hongyulu-github.vercel.app/",
    },
    {
      title: "Kiki's house",
      subtitle: t("subtitleKikisHouse"),
      image: "/kiki-s-house.png",
      link: "https://hongyulu-github.github.io/kiki-s-house/",
    },
    {
      title: "Kiki's tea house",
      subtitle: t("subtitleKikisTeaHouse"),
      image: "/kiki-s-tea-house.png",
      link: "https://kiki-s-tea-house.vercel.app/",
    },
    {
      title: "Find Your Chinese name",
      subtitle: t("subtitleFindYourChineseName"),
      image: "/nombre-chino.png",
      link: "https://hongyulu-github.github.io/EOIMalagaChinoLu/",
    },
    {
      title: "Simon Dice",
      subtitle: t("subtitleSimonDice"),
      image: "/simon-dice.png",
      link: "https://hongyulu-github.github.io/simondice/",
    },
  ];

  return (
    <VStack p={"40px"} spacing={"30px"} className="projectStackContainer">
      {projectslist.map((project, index) => (
        <Project project={project} index={index} key={index} />
      ))}
    </VStack>
  );
}

function Main() {
  return (
    <div className="mainSectionContainer">
      <WelcomeBox />
      <About />
      <ProjectStack />
    </div>
  );
}
export default Main;
