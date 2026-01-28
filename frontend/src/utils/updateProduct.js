import axios from "axios";
import { useValidateProduct } from "../hooks/useValidateProduct";
import { baseUrl } from "./constants";
import { getProducts } from "./getProducts";

export const updateProduct = async (e, id, name, price, description, imageUrl, setErr, setProducts) => {
  e.preventDefault();

  const error = useValidateProduct(name, price, description, imageUrl);
  if (error) {
    setErr(error);
    return false;
  }

  try {
    const res = await axios.put(
      baseUrl + "api/products/" + id,
      { name, price, description, image: imageUrl },
      { headers: { "Content-Type": "application/json", autherization: `update ${localStorage.getItem("adminToken")}` } }
    );
    if (!res.data.success) {
      setErr(res.data.message);
      return false;
    }
    getProducts(setProducts);
    return true;
  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    setErr(message);
    return false;
  }
};
