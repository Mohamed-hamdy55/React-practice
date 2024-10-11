import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCard({
  id,
  title,
  images,
  description,
  brand,
  price,
  category,
}) {

  return (
    <Card style={{ width: "18rem" }}>
      <h4>{category}</h4>
      <Card.Img
        variant="top"
        src={images[0]}
        style={{ width: 200, height: 250 }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>brand: </strong>
          {!brand ? "N/A" : brand}
        </Card.Text>
        <Card.Text>
          <strong>Price : </strong>
          {price}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>{description}</strong>
        </ListGroup.Item>
      </ListGroup>
        <Card.Body>
          <Link
            className="btn btn-primary"
            to={`/products/productDetails/${id}`}
          >
            Product Page
          </Link>
        </Card.Body>
    </Card>
  );
}
