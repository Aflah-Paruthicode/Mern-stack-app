import { Button, Container, Text, Flex, HStack,Link as Link2 } from "@chakra-ui/react";
import { Moon, SquarePlus, Sun } from "lucide-react";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router-dom";

const navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} p={"7"} mb={'10'} >
      <Flex height={"16"} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
          padding={'4'}
        >
          <Link2 >Techy's Store</Link2>
        </Text>

        <HStack spacing={12} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <SquarePlus color="red" size={48} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <Moon /> : <Sun />}</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default navbar;
