import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IQuestions } from "../../../pages/Faq/FaqQuestions";
import { useState } from "react";

const CardFaq = ({ question, answer }: IQuestions) => {
  const [isPlusIcon, setIsPlusIcon] = useState(true);

  function changeIcon() {
    setIsPlusIcon(!isPlusIcon);
  }

  return (
    <Accordion allowMultiple>
      <AccordionItem margin={"2px"} border={"none"}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontWeight={"bold"}
              onClick={changeIcon}
            >
              {isPlusIcon ? (
                <AddIcon margin={"5px"} />
              ) : (
                <MinusIcon margin={"5px"} />
              )}
              {question}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{answer}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CardFaq;
