import React from "react";
import "./Cart.scss";
import { Accordion, Nav, Button,  } from "react-bootstrap";
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
        
          <div className="cart__checkout">
            <div className="cart__container__right">
            <div className="cart__container__content__left">
              <div className="cart__container__content__left__price">Price</div>
              <div className="cart__container__content__left__shipping">
                Shipping
              </div>
              <div className="cart__container__content__left__line"></div>
              <div className="cart__container__content__left__total">Total</div>
            </div>
            <div className="cart__container__content__right">
              <div className="cart__container__content__right__price">$32</div>
              <div className="cart__container__content__right__shipping">
                $8
              </div>
              <div className="cart__container__content__right__line"></div>
              <div className="cart__container__content__right__total">$40</div>
            </div>
          </div>
          
          <div className="payment__cart__container">
          <div className="payment__cart__heading">Pay with Card</div>
          <div className="payment__cart__text">Card Information</div>
          <div className="input__box__payment__card">
          <input
              className="input__box__payment__card__input__field"
              placeholder="XXXX XXXX XXXX XXXX"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="33.681" height="23.228" viewBox="0 0 33.681 23.228">
  <g id="visa" transform="translate(0 -79.451)">
    <path id="Path_670" data-name="Path 670" d="M33.681,100.688a1.991,1.991,0,0,1-1.991,1.991H1.991A1.991,1.991,0,0,1,0,100.688V81.442a1.991,1.991,0,0,1,1.991-1.991h29.7a1.991,1.991,0,0,1,1.991,1.991v19.246Z" transform="translate(0 0)" fill="#fff"/>
    <path id="Path_671" data-name="Path 671" d="M35.971,194.225l-.791-3.794a.943.943,0,0,0-1.02-.7H30.534l-.032.173A7.457,7.457,0,0,1,35.971,194.225Z" transform="translate(-28.495 -103.026)" fill="#f79f1a"/>
    <g id="Group_257" data-name="Group 257" transform="translate(0 79.451)">
      <path id="Path_672" data-name="Path 672" d="M187.3,190.892h-2.343l-1.463,8.587h2.339Z" transform="translate(-171.428 -183.561)" fill="#059bbf"/>
      <path id="Path_673" data-name="Path 673" d="M70.409,199.553l3.685-8.572H71.614l-2.292,5.857-.245-.884a9.162,9.162,0,0,0-3.241-3.559l2.1,7.161Z" transform="translate(-61.505 -183.644)" fill="#059bbf"/>
      <path id="Path_674" data-name="Path 674" d="M248.038,194.586c.009-.975-.617-1.718-1.966-2.333-.82-.4-1.319-.661-1.313-1.064,0-.356.423-.738,1.34-.738a4.321,4.321,0,0,1,1.751.329l.212.1.317-1.86a6.068,6.068,0,0,0-2.1-.359c-2.313,0-3.941,1.164-3.955,2.833-.015,1.234,1.164,1.922,2.051,2.333.911.419,1.217.688,1.211,1.064-.006.575-.726.837-1.4.837a4.911,4.911,0,0,1-2.2-.45l-.3-.137-.329,1.924a7.384,7.384,0,0,0,2.606.456C246.422,197.519,248.02,196.37,248.038,194.586Z" transform="translate(-225.479 -181.475)" fill="#059bbf"/>
      <path id="Path_675" data-name="Path 675" d="M343.335,198.318l3,0c.071.3.285,1.287.285,1.287h2.172l-1.9-8.581h-1.807a1.165,1.165,0,0,0-1.225.711l-3.476,7.87h2.46S343.244,198.55,343.335,198.318Zm1.6-4.158c-.012.023.194-.5.312-.82l.159.74s.447,2.051.541,2.48h-1.942C344.2,196.067,344.94,194.159,344.94,194.159Z" transform="translate(-317.993 -183.687)" fill="#059bbf"/>
      <path id="Path_676" data-name="Path 676" d="M31.69,79.451H1.991A1.991,1.991,0,0,0,0,81.442v2.066H33.681V81.442A1.991,1.991,0,0,0,31.69,79.451Z" transform="translate(0 -79.451)" fill="#059bbf"/>
    </g>
    <path id="Path_677" data-name="Path 677" d="M31.69,374.928H1.991A1.991,1.991,0,0,1,0,372.937v-2.066H33.681v2.066A1.991,1.991,0,0,1,31.69,374.928Z" transform="translate(0 -272.249)" fill="#f79f1a"/>
    <path id="Path_678" data-name="Path 678" d="M1.415,100.688V81.442a1.991,1.991,0,0,1,1.991-1.991H1.991A1.991,1.991,0,0,0,0,81.442v19.246a1.991,1.991,0,0,0,1.991,1.991H3.407A1.991,1.991,0,0,1,1.415,100.688Z" transform="translate(0 0)" fill="#202121" opacity="0.15"/>
  </g>
</svg>


          </div>
            
          </div> 
        </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
