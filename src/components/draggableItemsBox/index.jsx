import {
  Avatar,
  Badge,
  Box,
  HStack,
  SimpleGrid,
  StackDivider,
  Tag,
} from "@chakra-ui/react";
// import { useLanguage } from "../../context/languageContext";
import { getColorCssVariable } from "../../utils/utils";
import "./styles.css";

function DraggableItemsBox() {
  // const { t } = useLanguage();
  const hobbies = {
    painting: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg"],
    sifi: ["Doctor Who", "LOTR", "Matrix"],
    personality: ["friends", "passionate", "open-minded", "honest", "empathic"],
  };

  const categories = Object.keys(hobbies);
  const subcategories = [...hobbies.sifi, ...hobbies.personality];
  // const [draggedItem, setDraggedItem] = useState();

  // console.log(draggedItem);

  return (
    <Box h={"80vh"} position="relative">
      <HStack
        className="categoryStack"
        divider={<StackDivider borderColor={getColorCssVariable("grey")} />}
      >
        {categories.map((category, index) => {
          return (
            <Badge colorScheme="purple" variant="subtle" key={index}>
              {category}
            </Badge>
          );
        })}
      </HStack>
      <SimpleGrid columns={2} spacing={10}>
        {subcategories.map((subcategory, index) => {
          return (
            <Tag
              key={index}
              borderRadius="full"
              variant="solid"
              colorScheme="green"
            >
              {subcategory}
            </Tag>
          );
        })}
        {hobbies.painting.map((painting, index) => {
          return <Avatar src={painting} id={index} key={index} />;
        })}
      </SimpleGrid>
      {/* <DraggableItem child={<div>hello</div>} setDraggedItem={setDraggedItem} /> */}
      {/* <Text>{t("drag")}</Text> */}
    </Box>
  );
}

export default DraggableItemsBox;
