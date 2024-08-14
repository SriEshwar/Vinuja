
import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cart } = useCart();

  // Check if cart data is being retrieved correctly
  useEffect(() => {
    console.log('Cart Data:', cart);
  }, [cart]);

  // User details state
  const [userDetails, setUserDetails] = useState({
    name: '',
    doorNo: '',
    city: '',
    pincode: '',
    state: '',
    landmark: '',
    phoneNo: ''
  });

  const [isEditing, setIsEditing] = useState(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle saving the details
  const handleSave = () => {
    setIsEditing(false);
  };

  // Handle editing the details
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="placeorder-container">
      <h1>Place Your Order</h1>
      
      <div className="user-details-section">
        <h2>Shipping Information</h2>
        {isEditing ? (
          <div className="user-details-form">
            <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleInputChange} />
            <input type="text" name="doorNo" placeholder="Door No" value={userDetails.doorNo} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" value={userDetails.city} onChange={handleInputChange} />
            <input type="text" name="pincode" placeholder="Pincode" value={userDetails.pincode} onChange={handleInputChange} />
            <input type="text" name="state" placeholder="State" value={userDetails.state} onChange={handleInputChange} />
            <input type="text" name="landmark" placeholder="Landmark" value={userDetails.landmark} onChange={handleInputChange} />
            <input type="text" name="phoneNo" placeholder="Phone No" value={userDetails.phoneNo} onChange={handleInputChange} />
            <button onClick={handleSave} className="save-details-button">Save Details</button>
          </div>
        ) : (
          <div className="user-details-view">
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Door No:</strong> {userDetails.doorNo}</p>
            <p><strong>City:</strong> {userDetails.city}</p>
            <p><strong>Pincode:</strong> {userDetails.pincode}</p>
            <p><strong>State:</strong> {userDetails.state}</p>
            <p><strong>Landmark:</strong> {userDetails.landmark}</p>
            <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
            <button onClick={handleEdit} className="edit-details-button">Edit</button>
          </div>
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.imgSrc} alt={item.name} />
              <div className="item-details">
                <span><strong>Product Name:</strong> {item.name}</span>
                <span><strong>Price:</strong> ₹{item.price}</span>
                <span><strong>Delivery Date:</strong> {new Date().toLocaleDateString()}</span>
                <span><strong>Return:</strong> Return within 7 days</span>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <button onClick={() => window.location.href = '/payment'} className="go-to-payment-button">Go to Payment</button>
    </div>
  );
};

export default PlaceOrder;











// import React, { useState, useEffect } from 'react';
// import { useCart } from './CartContext';
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   const { cart } = useCart();

//   // Check if cart data is being retrieved correctly
//   useEffect(() => {
//     console.log('PlaceOrder component cart:', cart);
//   }, [cart]);

//   // User details state
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     doorNo: '',
//     city: '',
//     pincode: '',
//     state: '',
//     landmark: '',
//     phoneNo: ''
//   });

//   const [isEditing, setIsEditing] = useState(true);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   // Handle saving the details
//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   // Handle editing the details
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   // If the cart is empty, delay rendering until it's loaded
//   if (cart.length === 0) {
//     return <p>Loading cart...</p>;
//   }

//   return (
//     <div className="placeorder-container">
//       <h1>Place Your Order</h1>
      
//       <div className="user-details-section">
//         <h2>Shipping Information</h2>
//         {isEditing ? (
//           <div className="user-details-form">
//             <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleInputChange} />
//             <input type="text" name="doorNo" placeholder="Door No" value={userDetails.doorNo} onChange={handleInputChange} />
//             <input type="text" name="city" placeholder="City" value={userDetails.city} onChange={handleInputChange} />
//             <input type="text" name="pincode" placeholder="Pincode" value={userDetails.pincode} onChange={handleInputChange} />
//             <input type="text" name="state" placeholder="State" value={userDetails.state} onChange={handleInputChange} />
//             <input type="text" name="landmark" placeholder="Landmark" value={userDetails.landmark} onChange={handleInputChange} />
//             <input type="text" name="phoneNo" placeholder="Phone No" value={userDetails.phoneNo} onChange={handleInputChange} />
//             <button onClick={handleSave} className="save-details-button">Save Details</button>
//           </div>
//         ) : (
//           <div className="user-details-view">
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Door No:</strong> {userDetails.doorNo}</p>
//             <p><strong>City:</strong> {userDetails.city}</p>
//             <p><strong>Pincode:</strong> {userDetails.pincode}</p>
//             <p><strong>State:</strong> {userDetails.state}</p>
//             <p><strong>Landmark:</strong> {userDetails.landmark}</p>
//             <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
//             <button onClick={handleEdit} className="edit-details-button">Edit</button>
//           </div>
//         )}
//       </div>

//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         {cart.length > 0 ? (
//           cart.map(item => (
//             <div key={item.id} className="order-item">
//               <img src={item.imgSrc} alt={item.name} />
//               <div className="item-details">
//                 <span><strong>Product Name:</strong> {item.name}</span>
//                 <span><strong>Price:</strong> ₹{item.price}</span>
//                 <span><strong>Delivery Date:</strong> {new Date().toLocaleDateString()}</span>
//                 <span><strong>Return Policy:</strong> 10 days</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       <div className="order-actions">
//         {cart.length > 0 && <button className="go-to-payment-button">Go to Payment</button>}
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;
