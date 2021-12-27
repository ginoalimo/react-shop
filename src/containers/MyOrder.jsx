import React, { useContext, useState} from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import icons from '@icons/flechita.svg';
import AppContext from "@context/AppContext";


const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { state } = useContext(AppContext);
  const [ toggle, setToggle ] = useState(false);
    

  return (
    <aside className="MyOrder">
      <div className="title-container" onClick={() => setToggleOrders(!toggleOrders)}>
        <img src={icons} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map (product => (
          <OrderItem product={product} key={`orderItem-${product.id}`}/>
        ))}
        
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${state.total}</p>
        </div>
        <button className="primary-button" onClick={() => setToggle(true)}>Checkout</button>
      </div>
      {toggle && <Checkout setToggle={setToggle}/>}
    </aside>
  );
};

export default MyOrder;
