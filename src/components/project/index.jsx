import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "./styles.css";

function Project({ project, index }) {
  const getProjectCardTop = (index) => {
    return `calc(20% + 20px*${index})`;
  };
  return (
    <div
      key={index}
      className="project"
      style={{ top: getProjectCardTop(index) }}
    >
      <a href={project.link} target="_blank">
        <Card maxW={"1000px"} direction={{ base: "column", sm: "row" }}>
          <Image
            src={project.image}
            alt={project.title}
            borderRadius="lg"
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.title}</Heading>
              <Text>{project.subtitle}</Text>
            </Stack>
          </CardBody>
        </Card>
      </a>
    </div>
  );
}

export default Project;
