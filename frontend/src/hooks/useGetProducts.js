
 import { baseUrl } from "../utils/constants";
 import axios from "axios";

 export const useGetProducts = async (setProducts) => {
     try {
       const res = await axios.get(baseUrl + "/api/products");
       setProducts(res.data.data);
       console.log(res.data.data);
     } catch (err) {
       console.error(err);
     }
   };