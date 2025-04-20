import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from 'lucide-react'
import { toaster, Toaster } from "../components/ui/toaster.jsx"
import React from 'react'
import { useColorModeValue } from './ui/color-mode.jsx'
import { userProductStore } from '../store/product.js'

const ProductCard = ({product}) => {
    console.log('products arrived : ',product)
    const textColor = useColorModeValue("gray.600","gray.200");

    const { deleteProduct } = userProductStore()
    const handleDeleteProduct = async (id) => {
        const {success,message} = await deleteProduct(id)
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
    }

  return (
     <Box shadow={'lg'} rounded={'lg'} overflow={'hidden'} transition={'all 0.3s'} _hover={{transform: "translateY(-5px)",shadow: "xl"}} bg={useColorModeValue("white","gray.800")} >
        <Toaster />
        <Image src={product.image} alt={product.name} h={'48'} w={'full'} objectFit={'cover'} />
     
     <Box p={4}>
        <Heading as='h3' size='md' color={textColor} mb={2} >
            {product.name} 
        </Heading>
 
        <Text fontWeight={'bold'} fontSize={'lg'} color={textColor} mb={4} >
        ₹{product.price} /-
        </Text>

        <HStack spacing={2}>
           <IconButton bg={useColorModeValue('blue.400','blue.500')} color={'white'} >
                <EditIcon />
            </IconButton>
            <IconButton bg={useColorModeValue('red.400','red.500')} color={'white'} >
                <DeleteIcon onClick={() => {
                    handleDeleteProduct(product._id)
                }} />
             </IconButton>
        </HStack>
     </Box>

     </Box>
  )
}

export default ProductCard