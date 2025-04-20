import { userProductStore } from "../store/product.js";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { toaster, Toaster } from "../components/ui/toaster.jsx"
import { useState } from "react"

const createPage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  });

  const { createProduct } = userProductStore()
   

 const  handleAddProduct = async  () => {
    const {success,message} = await createProduct(newProduct)
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type:'error',
      })
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type:'success',
      })
    }
    setNewProduct({name:'',price:'',image:''})
 }
 
  return <Container maxW={'container.sm'} >
    <Toaster />
    <VStack spacing={8} >
      <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8} >
        Create new Product
      </Heading>

      <Box w={'xl'} my={'24'} bg={useColorModeValue('gray.200','gray.800')}
       p={6} rounded={'lg'} shadow={'md'} >

        <VStack spacing={4} >
          <Input placeholder="Product Name.." name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct,name:e.target.value})} >
          </Input>
          <Input placeholder="Price.." type="number" name="price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct,price:e.target.value})} >
          </Input>
          <Input placeholder="Image URL.." name="image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct,image:e.target.value})} >
          </Input>
          <Button bgColor={useColorModeValue('blue.400','blue.200')} onClick={handleAddProduct}  w={'full'} >
            Add Product
          </Button>
        </VStack>
        
      </Box>
    </VStack>

  </Container>
}

export default createPage