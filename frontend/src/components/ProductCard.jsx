import { Box, Heading, HStack, IconButton, Image, Text, Dialog, Portal, Button } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from 'lucide-react'
import { toaster, Toaster } from "../components/ui/toaster.jsx"
import { React, useRef, useState } from 'react'
import { useColorModeValue } from './ui/color-mode.jsx'
import { userProductStore } from '../store/product.js'

const ProductCard = ({product}) => {
  const [updatedProducts, setUpdatedProduct] = useState(product)
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

     <Demo product={product}  />

     </Box>
  )
}

export default ProductCard





import { Field, Input, Stack } from "@chakra-ui/react"
const Demo = (props) => {
  const product = props.product
  const ref = useRef(null)
  return (
    <Dialog.Root initialFocusEl={() => ref.current}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Header</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Field.Root>
                  <Field.Label>First Name</Field.Label>
                  <Input type='text' value={product.name} name='name' placeholder="Product Name" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Last Name</Field.Label>
                  <Input type='number' value={product.price} name='price' placeholder="Product Price" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>First Name</Field.Label>
                  <Input type='text' value={product.image} name='image' placeholder="Product Link" />
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Update</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}