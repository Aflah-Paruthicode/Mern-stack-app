import ProductCard from "../components/ProductCard.jsx"
import { userProductStore } from "../store/product.js"
import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const HomePage = () => {

  const { fetchProduct, products } =  userProductStore()

  useEffect(() => {
    fetchProduct()
  },[fetchProduct])
  console.log('products : ',products)

  return (
    <Container maxW='container.xl' py={12} >
      <VStack spaceY={12}>
        <Text
        fontSize={"2xl"}
        fontWeight={'bold'}
        bgGradient='to-r'
        gradientFrom="cyan.400"
        gradientTo="blue.500"
        bgClip={'text'}
        textAlign={'center'}>
        
          Current Products
        </Text>

        <SimpleGrid columns={2} gap={'40px'} w={'full'}  >
            {products.map((product) => {
              return <Box key={product._id}>
                <ProductCard product={product} />
              </Box>
              })}
        </SimpleGrid>

        {products.length === 0 && (
            <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
              No products found{" "}
              <Link to={'/create'}>
                <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: "underline" }}>
                  Create a product
                </Text>
              </Link>
            </Text>
          )}
      </VStack>
    </Container>
  )
}

export default HomePage