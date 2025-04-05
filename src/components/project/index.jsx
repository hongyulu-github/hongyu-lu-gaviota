import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./styles.css";

function Project({ project, index }) {
  const getProjectCardTop = (index) => {
    return `calc(20px*${index + 1})`;
  };

  const display = useBreakpointValue({ base: false, sm: true });
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
            objectFit="contain"
            maxW={{ base: "100%", sm: "60%" }}
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.title}</Heading>
              {display && <Text>{project.subtitle}</Text>}
            </Stack>
          </CardBody>
        </Card>
      </a>
    </div>
  );
}

export default Project;
