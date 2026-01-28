import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../utils/addProduct";

const CreatePage = ({ setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  return (
    <div className="">
      <form
        onSubmit={async (e) => {
          let success = await addProduct(e, name, price, description, imageUrl, setProducts, setErr);
          if (success == true) navigate("/");
        }}
      >
        <Stack gap="4" align="flex-end" width={{ base: "80%", sm: "300px", md: "400px" }} mx="auto">
          <div style={{ justifyContent: "space-between", fontSize: "25px", display: "flex", width: "100%" }}>
            <Button variant="outline" onClick={() => navigate("/")}>
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
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
};

export default CreatePage;
