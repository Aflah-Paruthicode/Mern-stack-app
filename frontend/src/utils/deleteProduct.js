import axios from "axios";
import { baseUrl } from "./constants";
import { getProducts } from "./getProducts";

export const deleteProduct = async (id, setProducts, setErr) => {
  try {
    const res = await axios.delete(baseUrl + "api/products/" + id, {
      headers: { "Content-Type": "application/json", autherization: `update ${localStorage.getItem("adminToken")}` },
    });
    getProducts(setProducts);
    return true;
  } catch (err) {
    console.error(err);
    setErr(err.response?.data?.message || "Admin only");
    return false;
  }
};
