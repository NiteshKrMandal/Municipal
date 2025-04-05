import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const PlaceOrder = () => {
  const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext);
  const [data, setData] = useState({
         firstName: "",
         lastName: "",
         middleName:"",
         fatherName:"",
         email: "",
         village:"",
         municipality:"",
         citizenship:"",
         street: "",
         state:"",
         ward: "",
         country: "",
        phone: "",
       });

       const onChangeHandler = (event) => {
             const name = event.target.name;
             const value = event.target.value;
           setData((data) => ({ ...data, [name]: value }));
        };

        useEffect(() => {
          console.log(data);
        }, [data]);

        const placeOrder= async (event)=>{
          event.preventDefault();
          let orderItems = [];
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              let itemInfo = item;
              itemInfo["quantity"] = cartItems[item._id];
              orderItems.push(itemInfo);
            }
          });
          //console.log(orderItems);
          let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,
          };
          let response = await axios.post(url + "/api/order/place", orderData, {
            headers: { token },
          });
          if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
          } else {
            alert("Error");
          }
        }
        

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Basic Information</p>
        <div className="multi-field">
          <input  required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName} type="text" placeholder="First name" />
          <input  required
            name="middleName"
            onChange={onChangeHandler}
            value={data.middleName} type="text" placeholder="Middle name" />
          <input  required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName} type="text" placeholder="Last name"  />
        </div>
        <input  required
            name="fatherName"
            onChange={onChangeHandler}
            value={data.fatherName} type="text" placeholder="Father's name"  />
        <input  required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email" placeholder="Email address" />
        <input  required
             name="village"
           onChange={onChangeHandler}
         value={data.village} type="text" placeholder="Village" />
        <input required
             name="municipality"
           onChange={onChangeHandler}
         value={data.municipality} type="text" placeholder="Municipality" />
        <input required
             name="citizenship"
           onChange={onChangeHandler}
         value={data.citizenship} type="number,symbol" placeholder="Citizenship Number" />
        <div className="multi-field">
          <input required
             name="city"
           onChange={onChangeHandler}
         value={data.city} type="text" placeholder="City" />
          <input required
             name="state"
           onChange={onChangeHandler}
         value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input required
             name="ward"
           onChange={onChangeHandler}
         value={data.ward} type="text" placeholder="Ward No" />
          <input required
             name="country"
           onChange={onChangeHandler}
         value={data.country} type="text" placeholder="Country" />
        </div>
        <input required
             name="phone"
           onChange={onChangeHandler}
         value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;


// Orignal Code if something goes wrong
// import React, { useContext } from "react";
// import "./PlaceOrder.css";
// import { StoreContext } from "../../context/StoreContext";
// const PlaceOrder = () => {
//   const { getTotalCartAmount } = useContext(StoreContext);
//   return (
//     <form className="place-order">
//       <div className="place-order-left">
//         <p className="title">Basic Information</p>
//         <div className="multi-field">
//           <input type="text" placeholder="First name" required />
//           <input type="text" placeholder="Middle name" />
//           <input type="text" placeholder="Last name" required />
//         </div>
//         <input type="text" placeholder="Father's name" required />
//         <input type="email" placeholder="Email address" />
//         <input type="text" placeholder="Village" />
//         <input type="text" placeholder="Municipality" />
//         <input type="number,symbol" placeholder="Citizenship Number" required />
//         <div className="multi-field">
//           <input type="text" placeholder="City" />
//           <input type="text" placeholder="State" />
//         </div>
//         <div className="multi-field">
//           <input type="text" placeholder="Ward No" />
//           <input type="text" placeholder="Country" />
//         </div>
//         <input type="text" placeholder="Phone" />
//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>Rs {getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Deliver Fee</p>
//               <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div>
//           </div>
//           <button>PROCEED TO PAYMENT</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;
