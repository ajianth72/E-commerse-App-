import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/Layout/ProductCard";
import CartContainer from "./components/Cart/CortContainer";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from "./components/Context/CartContext";

const productsArr = [
  {
    id: 'p1',
    title: "Colors",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 'p2',
    title: "Black and white Colors",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 'p3',
    title: "Yellow and Black Colors",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 'p4',
    title: "Blue Color",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 0,
  },
];

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const ctxObj = {
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,
  };

  const productsList = productsArr.map((product) => (
    <Col key={product.id}>
      <ProductCard item={product} />
    </Col>
  ));

  return (
    <CartContext.Provider value={ctxObj}>
      <Header />
      <Container>
        <Row>{productsList}</Row>
      </Container>
      {cartVisibility && <CartContainer />}
    </CartContext.Provider>
  );
}

export default App;
