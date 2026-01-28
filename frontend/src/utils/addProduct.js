import axios from "axios";
import { baseUrl } from "./constants";
import { useValidateProduct } from "../hooks/useValidateProduct";
import { getProducts } from "./getProducts";

export const addProduct = async (e, name, price, description, imageUrl, setProducts, setErr) => {
  e.preventDefault();

  const error = useValidateProduct(name, price, description, imageUrl);
  if (error) {
    setErr(error);
    return false;
  }

  try {
    const res = await axios.post(
      baseUrl + "api/products",
      { name, price, description, image: imageUrl },
      { headers: { "Content-Type": "application/json", autherization: `create ${localStorage.getItem("adminToken")}` } }
    );
    if (!res.data.success) {
      setErr(res.data.message);
      return false;
    } else {
      getProducts(setProducts);
      return true;
    }
  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    setErr(message);
    return false;
  }
};
