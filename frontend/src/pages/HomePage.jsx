import React from "react";
import ProductCard from "../components/ProductCard";
import { Flex } from "@chakra-ui/react";

const homePage = ({ products, setProducts }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap" justify="center" gap="8px" alignItems="center">
      {products.length > 0 && products.map((product, ind) => <ProductCard key={ind} product={product} setProducts={setProducts} />)}
    </Flex>
  );
};

export default homePage;
