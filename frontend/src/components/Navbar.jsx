import { Button, Container, Text, Flex, Link, HStack } from '@chakra-ui/react'
import { Moon, SquarePlus, Sun } from 'lucide-react';
import { useColorMode, useColorModeValue } from './ui/color-mode';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode() 
  return <Container maxW={'1140px'} px={'4'} > 

  <Flex height={'16'} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column",sm:"row"}} >

    <Text fontSize={{base:"22",sm:'28'}} fontWeight={'bold'} textTransform={'uppercase'} textAlign={'center'} bgGradient={"linear(to-r,cyan.400,blue.500)"} bgClip={'text'} >
      <Link to={"/"}>Techy's Store</Link>
    </Text>

    <HStack spacing={12} alignItems={'center'}>
      <Link to={'/create'}>
      <Button>
      <SquarePlus color="red" size={48} />
      </Button>
      </Link>
      <Button onClick={toggleColorMode}>
        { colorMode === "light" ? <Moon /> : <Sun /> }
      </Button>
    </HStack>

  </Flex>

   </Container>
  
}

export default Navbar