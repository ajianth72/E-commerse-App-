import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";

function ProductCard(props) {
  const { id, title, price, imageSrc } = props.item;
  const ctx = useContext(CartContext);
  const orderList = [...ctx.orderList];

  const buttonClickHandler = () => {
    const n = orderList.length;
    for (let i = 0; i < n; i++) {
      if (orderList[i].id === id) {
        orderList[i].quantity += 1;
        ctx.setOrderList(orderList);
        return;
      }
    }

    const obj = { ...props.item, quantity: 1 };
    orderList.push(obj);
    ctx.setOrderList(orderList);
  };

  return (
    <Card style={{ width: "15rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={title}  // Add alt text for accessibility
        style={{ height: "12rem", objectFit: "cover" }}
      />
      <Card.Body style={{ padding: "1rem" }}>
        <Card.Title style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ marginBottom: "1rem", fontSize: "1rem" }}>
          Price: ${price}
        </Card.Text>
        <Button variant="primary" style={{ fontSize: "1rem" }} onClick={buttonClickHandler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
