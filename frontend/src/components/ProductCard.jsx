import { Avatar, Button, Card } from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import { useGetProducts } from "../hooks/useGetProducts";

const ProductCard = ({ product, setProducts }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(baseUrl + "/api/products/" + product._id);
        useGetProducts(setProducts);
        navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={product.image} />
          <Avatar.Fallback name="Techy store" />
        </Avatar.Root>
        <Card.Title mt="2">{product.name}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
        <Card.Description>{product.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">
          <Link to={"/update/" + product._id}>Update</Link>
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
