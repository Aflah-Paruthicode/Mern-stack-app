import { Avatar, Button, Card } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteProduct } from "../utils/deleteProduct";

const ProductCard = ({ product, setProducts = null }) => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={product.image} />
          <Avatar.Fallback name="Techy store" />
        </Avatar.Root>
        <p style={{ width: "100%", textAlign: "start", color: "red", fontWeight: "400" }}>{err && err}</p>
        <Card.Title mt="2">{product.name}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
        <Card.Description>{product.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">
          <Link to={"/update/" + product._id}>Update</Link>
        </Button>
        <Button
          onClick={async () => {
            let success = await deleteProduct(product._id, setProducts, setErr);
            if (success == true) navigate("/");
          }}
        >
          Delete
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
