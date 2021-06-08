import React from "react";
import "./OrderPlaced.scss";
import { Accordion, Nav, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnComponent from "../components/BtnComponent";

export default function OrderPlaced() {
  return (
    <>
      <Header search={true} />
      <div className="container order__placed__container">
        <div className="order__placed__container__heading"></div>
        <div className="order__placed__container__illustration"></div>
        <div className="order__placed__container__info"></div>
        <Link to="/track-order">
          <BtnComponent placeholder="Track my Order" />
        </Link>
      </div>
      <Footer />
    </>
  );
}
