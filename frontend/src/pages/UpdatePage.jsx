import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { baseUrl } from "../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { useValidateProduct } from "../hooks/useValidateProduct";

import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProducts } from "../hooks/useGetProducts";

const UpdatePage = ({ products, setProducts }) => {
  const { id } = useParams();
  const product = products.find((ele) => ele._id === id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setImageUrl(product.image);
    }
  }, [product]);

  const editProduct = async (e) => {
    e.preventDefault();

    const error = useValidateProduct(name, price, description, imageUrl);
    if (error) return setErr(error);

    try {
      const res = await axios.put(baseUrl + "/api/products/" + id, {
        name,
        price,
        description,
        image: imageUrl,
      });
      if (!res.data.success) setErr(res.data.message);
      else {
        useGetProducts(setProducts);
        navigate("/");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      setErr(message);
    }
  };

  return (
    <div className="">
      <form onSubmit={editProduct}>
        <Stack gap="4" align="flex-end" width={{ base: "80%", sm: "300px", md: "400px" }} mx="auto">
          <div style={{ justifyContent: "space-between", fontSize: "25px", display: "flex", width: "100%" }}>
            <Button variant="outline" onClick={() => navigate('/')}>
              back
            </Button>
          </div>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Product name..." />
          </Field.Root>

          <Field.Root>
            <Field.Label>Price</Field.Label>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Product price..." />
          </Field.Root>

          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Product description..." />
          </Field.Root>

          <Field.Root>
            <Field.Label>URL</Field.Label>
            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder="Product img url..." />
          </Field.Root>
          <p style={{ width: "100%", textAlign: "start", color: "red", fontWeight: "400" }}>{err && err}</p>
          <Button type="submit">Update Product</Button>
        </Stack>
      </form>
    </div>
  );
};

export default UpdatePage;
