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
        <div className="order__placed__container__heading">
          Your Order has been placed
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="170"
          viewBox="0 0 153.056 164.5"
        >
          <g id="order" transform="translate(-17.81)">
            <path
              id="Path_686"
              data-name="Path 686"
              d="M124.761,225.321H17.81L23.664,120.5H61.647l4.819,2.551,4.819-2.551h47.168Z"
              transform="translate(0 -81.785)"
              fill="#ff3d58"
            />
            <path
              id="Path_687"
              data-name="Path 687"
              d="M237.725,225.321H184.25V120.5h47.168Z"
              transform="translate(-112.965 -81.785)"
              fill="#d20173"
            />
            <circle
              id="Ellipse_65"
              data-name="Ellipse 65"
              cx="41.928"
              cy="41.928"
              r="41.928"
              transform="translate(87.009 80.644)"
              fill="#97cbff"
            />
            <path
              id="Path_688"
              data-name="Path 688"
              d="M405.618,292.928a41.93,41.93,0,0,1-41.928,41.928V251A41.93,41.93,0,0,1,405.618,292.928Z"
              transform="translate(-234.753 -170.356)"
              fill="#7f7cff"
            />
            <path
              id="Path_689"
              data-name="Path 689"
              d="M340.4,339.328l-20.938,20.938-3.724,3.724L298.52,346.775l6.818-6.815,10.4,10.4,3.724-3.724,14.121-14.124Z"
              transform="translate(-190.521 -225.678)"
              fill="#f1f1f1"
            />
            <path
              id="Path_690"
              data-name="Path 690"
              d="M384.628,339.328,363.69,360.266V346.634l14.121-14.124Z"
              transform="translate(-234.753 -225.678)"
              fill="#d6d6ea"
            />
            <path
              id="Path_691"
              data-name="Path 691"
              d="M152.2,28.807V62.892h-9.639V28.807a19.168,19.168,0,1,0-38.336,0V62.892H94.59V28.807a28.807,28.807,0,1,1,57.614,0Z"
              transform="translate(-52.111)"
              fill="#4e588b"
            />
            <path
              id="Path_692"
              data-name="Path 692"
              d="M213.057,28.807V62.892h-9.639V28.807A19.188,19.188,0,0,0,184.25,9.639V0A28.839,28.839,0,0,1,213.057,28.807Z"
              transform="translate(-112.965 0)"
              fill="#293e65"
            />
            <path
              id="Path_693"
              data-name="Path 693"
              d="M154.253,120.5h9.639v24.177h-9.639Z"
              transform="translate(-92.605 -81.785)"
              fill="#4e588b"
            />
            <path
              id="Path_694"
              data-name="Path 694"
              d="M157.594,192.709V217.2H136.63V192.709l10.48-6.959,0,0Z"
              transform="translate(-80.644 -126.071)"
              fill="#fe0"
            />
            <path
              id="Path_695"
              data-name="Path 695"
              d="M179.74,192.716V217.2H169.26V185.76Z"
              transform="translate(-102.791 -126.077)"
              fill="#fc0"
            />
          </g>
        </svg>
        <div className="order__placed__container__info">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </div>
        <Link to="/track-order" style={{ textDecoration: "none" }}>
          <BtnComponent placeholder="Track my Order" />
        </Link>
      </div>
      <Footer />
    </>
  );
}
