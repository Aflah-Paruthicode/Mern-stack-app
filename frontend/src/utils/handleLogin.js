import axios from "axios";
import { baseUrl } from "./constants";

export const handleLogin = async (e, email, password, setErr) => {
  e.preventDefault();
  try {
    const res = await axios.post(baseUrl + "api/products/login", { email, password }, { headers: { "Content-Type": "application/json" } });

    if (!res.data.token) {
      setErr("something went wrong");
      return false;
    } else {
      localStorage.setItem("adminToken", res.data.token);
      return true;
    }
  } catch (err) {
    console.error(err);
    setErr(err.response?.data?.message || "Login failed");
    return false;
  }
};
