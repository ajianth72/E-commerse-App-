import React, { useContext } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

function OrderItem(props) {
  const ctx = useContext(CartContext);
  const orderList = [...ctx.orderList];

  const updateQuantity = (e) => {
    const updatedOrderList = orderList.map((item) => {
      if (item.id === props.id) {
        return { ...item, quantity: parseInt(e.target.value) };
      }
      return item;
    });
    ctx.setOrderList(updatedOrderList);
  };

  const removeOrder = () => {
    const updatedOrderList = orderList.filter((item) => item.id !== props.id);
    ctx.setOrderList(updatedOrderList);
  };

  const totalprice = props.quantity * props.price;

  return (
    <Row className="my-3">
      <Col xs={3}>
        <Image src={props.imageSrc} fluid />
      </Col>
      <Col xs={9}>
        <h5>{props.title}</h5>
        <p className="my-1">${props.price}</p>
        <p className="my-1">{`${props.price} X ${props.quantity} = Rs. ${totalprice}`}</p>
        <div className="d-flex align-items-center my-2">
          <input
            type="number"
            min="1"
            className="form-control me-2"
            value={props.quantity}
            onChange={updateQuantity}
          />
          <Button variant="outline-danger" onClick={removeOrder}>
            Remove
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default OrderItem;

