import {
  Avatar,
  Badge,
  Box,
  HStack,
  Text,
  SimpleGrid,
  StackDivider,
  Tag,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { getColorCssVariable } from "../../utils/utils";
import "./styles.css";

function DraggableItemsBox() {
  const { t } = useLanguage();
  const hobbies = {
    painting: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg"],
    sifi: ["Doctor Who", "LOTR", "Matrix"],
    personality: ["friends", "passionate", "open-minded", "honest", "empathic"],
  };

  const categories = Object.keys(hobbies);
  const subcategories = [...hobbies.sifi, ...hobbies.personality];

  const [draggedItem, setDraggedItem] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    e.target.style.position = "absolute";
    e.target.style.zIndex = "1000";
  };

  const handleDrag = (e) => {
    if (!draggedItem) return;
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  const handleDrop = (e) => {
    if (!draggedItem) return;
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    setDraggedItem(null);
  };

  const handleDragEnd = (e) => {
    e.target.style.position = "static";
    e.target.style.zIndex = "0";
  };

  return (
    <Box
      h={"80vh"}
      position="relative"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
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
              draggable
              onDragStart={(e) => handleDragStart(e, subcategory)}
              onDrag={(e) => handleDrag(e)}
              onDragEnd={handleDragEnd}
              style={{
                position: draggedItem === subcategory ? "absolute" : "static",
                top: draggedItem === subcategory ? `${position.y}px` : "auto",
                left: draggedItem === subcategory ? `${position.x}px` : "auto",
              }}
            >
              {subcategory}
            </Tag>
          );
        })}
        {hobbies.painting.map((painting, index) => {
          return (
            <Avatar
              draggable
              key={index}
              src={painting}
              onDragStart={(e) => handleDragStart(e, painting)}
              onDrag={(e) => handleDrag(e)}
              onDragEnd={handleDragEnd}
              style={{
                position: draggedItem === painting ? "absolute" : "static",
                top: draggedItem === painting ? `${position.y}px` : "auto",
                left: draggedItem === painting ? `${position.x}px` : "auto",
              }}
            />
          );
        })}
      </SimpleGrid>
      <Text>{t("drag")}</Text>
    </Box>
  );
}

export default DraggableItemsBox;
