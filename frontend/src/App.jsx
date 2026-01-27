import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import UpdatePage from "./pages/UpdatePage";
import { useEffect, useState } from "react";
import { useGetProducts } from "./hooks/useGetProducts";

function App() {  
  
  let [products, setProducts] = useState([]);
  
    useEffect(() => {
      useGetProducts(setProducts);
    }, []);

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage products={products} setProducts={setProducts} />} />
          <Route path="/create" element={<CreatePage setProducts={setProducts} />} />
          <Route path="/update/:id" element={<UpdatePage products={products} setProducts={setProducts} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
