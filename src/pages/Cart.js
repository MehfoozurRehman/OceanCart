import React from "react";
import "./Cart.scss";
import { Accordion, Nav, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  return (
    <>
      <Header search={true} />
      <div className="container cart__container">
        <div className="cart__container__header__heading">Cart</div>
        <div className="cart__container__content">
          <div className="cart__container__content__left">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="cart__container__content__right"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
