import {
  Avatar,
  Badge,
  Box,
  defineStyle,
  HStack,
  SimpleGrid,
  StackDivider,
  Text,
} from "@chakra-ui/react";
// import { useLanguage } from "../../context/languageContext";
import { useLanguage } from "../../context/languageContext";
import { getColorCssVariable } from "../../utils/utils";
import "./styles.css";
import { useEffect, useState } from "react";

function HobbyGrid() {
  const { t } = useLanguage();
  const hobbies = {
    painting: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg"],
    "sifi&Fantasy": ["tardis.jpg", "LOTR.jpg", "harrypotter.jpg"],
    gaming: ["zelda.jpg", "animalCrossing.jpg", "yearwalk.jpg"],
  };

  const categories = Object.keys(hobbies);
  const subcategories = [
    ...hobbies.painting,
    ...hobbies["sifi&Fantasy"],
    ...hobbies.gaming,
  ];
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [matchedItems, setMatchedItems] = useState(new Set());

  const handleClick = (item) => {
    setSelectedItems((prevSelected) => {
      const newSet = new Set(prevSelected);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        if (newSet.size < 2) {
          newSet.add(item);
        } else {
          return new Set().add(item);
        }
      }
      return newSet;
    });
  };

  const isSelectedItemsMatch = () => {
    const [item1, item2] = [...selectedItems];

    const isCategoryMatch =
      (categories.includes(item1) && subcategories.includes(item2)) ||
      (categories.includes(item2) && subcategories.includes(item1));

    const isHobbyMatch =
      hobbies[item1]?.includes(item2) || hobbies[item2]?.includes(item1);

    return isCategoryMatch && isHobbyMatch;
  };

  const selectedRing = defineStyle({
    outlineWidth: "2px",
    outlineColor: "teal",
    outlineOffset: "3px",
    outlineStyle: "solid",
  });

  const matcheddRing = defineStyle({
    outlineWidth: "2px",
    outlineColor: "gold",
    outlineOffset: "3px",
    outlineStyle: "solid",
  });

  const allMatched = () => {
    const audio = new Audio("/yahaha.mp3");
    audio.play();
  };

  useEffect(() => {
    if (selectedItems.size === 2) {
      if (isSelectedItemsMatch()) {
        const newSet = new Set(matchedItems);
        selectedItems.forEach((item) => newSet.add(item));
        setMatchedItems(newSet);
      }
    }
  }, [selectedItems]);

  useEffect(() => {
    if (matchedItems.size == categories.length + subcategories.length)
      allMatched();
  }, [matchedItems]);

  return (
    <Box h={"80vh"} position="relative">
      <Text pb={"10px"}>{t("personality")}</Text>
      <HStack
        className="categoryStack"
        divider={<StackDivider borderColor={getColorCssVariable("grey")} />}
      >
        {categories.map((category, index) => {
          return (
            <Badge
              size={"sm"}
              colorScheme={selectedItems.has(category) ? "teal" : "purple"}
              variant="subtle"
              key={index}
              onClick={() => handleClick(category)}
            >
              {category}
            </Badge>
          );
        })}
      </HStack>
      <SimpleGrid columns={3} spacing={10}>
        {subcategories.map((img, index) => {
          return (
            <Avatar
              w={"100%"}
              css={
                matchedItems.has(img)
                  ? matcheddRing
                  : selectedItems.has(img)
                  ? selectedRing
                  : {}
              }
              size={"xl"}
              src={img}
              id={index}
              key={index}
              onClick={() => handleClick(img)}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default HobbyGrid;
