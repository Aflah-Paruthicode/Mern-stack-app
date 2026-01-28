import { baseUrl } from "./constants";
import axios from "axios";

export const getProducts = async (setProducts) => {
  try {
    const res = await axios.get(baseUrl + "api/products");
    setProducts(res.data.data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
