import React, { useState } from "react";
import "./ProductDetails.scss";
import Header from "../components/Header";
import img from "../assets/productPic.png";
import imgLarge from "../assets/productPicLarge.png";
import img1 from "../assets/productPicSuggestion.jpg";
import imgLarge1 from "../assets/productPicSuggestionLarge.jpg";
import img2 from "../assets/productPic.png";
import imgLarge2 from "../assets/productPicLarge.png";
import img3 from "../assets/productPic.png";
import imgLarge3 from "../assets/productPicLarge.png";
import img4 from "../assets/productPic.png";
import imgLarge4 from "../assets/productPicLarge.png";
import img5 from "../assets/productPic.png";
import imgLarge5 from "../assets/productPicLarge.png";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

function SuggestionImg({ imgURL, onClick }) {
  return (
    <button
      className="product__details__images__suggestion__btn"
      onClick={onClick}
    >
      <img
        src={imgURL}
        alt="product__details__images__suggestion1"
        className="product__details__images__suggestion"
      />
    </button>
  );
}

export default function ProductDetails() {
  const [imgLink, setImgLink] = useState(img);
  const [imgLinkLarge, setImgLinkLarge] = useState(imgLarge);
  return (
    <>
      <Header search={true} />
      <div className="container product__details">
        <div className="product__details__top__row">
          <div className="product__details__images">
            <div className="product__details__images__suggestions">
              <SuggestionImg
                imgURL={img1}
                onClick={() => {
                  setImgLink(img1);
                  setImgLinkLarge(imgLarge1);
                }}
              />
              <SuggestionImg
                imgURL={img2}
                onClick={() => {
                  setImgLink(img2);
                  setImgLinkLarge(imgLarge2);
                }}
              />
              <SuggestionImg
                imgURL={img3}
                onClick={() => {
                  setImgLink(img3);
                  setImgLinkLarge(imgLarge3);
                }}
              />
              <SuggestionImg
                imgURL={img4}
                onClick={() => {
                  setImgLink(img4);
                  setImgLinkLarge(imgLarge4);
                }}
              />
              <SuggestionImg
                imgURL={img5}
                onClick={() => {
                  setImgLink(img5);
                  setImgLinkLarge(imgLarge5);
                }}
              />
            </div>
            <div className="product__details__image">
              <GlassMagnifier
                imageSrc={imgLink}
                imageAlt="product__details__image"
                largeImageSrc={imgLinkLarge}
                allowOverflow={true}
                magnifierSize="30%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
