

import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Payment.css';

const Payment = () => {
  const { cart, clearCart } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit');
  const [formValues, setFormValues] = useState({
    cardNumber: '',
    validThru: '',
    cvv: '',
    upiId: ''
  });
  const [errors, setErrors] = useState({});

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (selectedPaymentMethod === 'credit') {
      if (!/^[0-9]{16}$/.test(formValues.cardNumber)) {
        newErrors.cardNumber = 'Card Number must be 16 digits';
      }
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formValues.validThru)) {
        newErrors.validThru = 'Valid Thru must be in MM/YY format';
      }
      if (!/^[0-9]{3}$/.test(formValues.cvv)) {
        newErrors.cvv = 'CVV must be 3 digits';
      }
    } else if (selectedPaymentMethod === 'upi' && !formValues.upiId) {
      newErrors.upiId = 'UPI ID is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    setErrors({});
    setFormValues({
      cardNumber: '',
      validThru: '',
      cvv: '',
      upiId: ''
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      placeOrder();
    }
  };

  // Function to place an order
  const placeOrder = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const orderDetails = {
      items: cart,
      totalAmount: totalAmount,
      paymentMethod: selectedPaymentMethod === 'credit' ? 'Credit/Debit/ATM Card' : selectedPaymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery',
      deliveryDate: deliveryDate,
      orderDate: new Date()
    };

    console.log('Order placed:', orderDetails);
    clearCart();
    // Navigate to order success page or display a success message
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-radio">
          <label>
            <input
              type="radio"
              value="credit"
              checked={selectedPaymentMethod === 'credit'}
              onChange={() => handlePaymentMethodChange('credit')}
            />
            Credit/Debit/ATM Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={selectedPaymentMethod === 'upi'}
              onChange={() => handlePaymentMethodChange('upi')}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={selectedPaymentMethod === 'cod'}
              onChange={() => handlePaymentMethodChange('cod')}
            />
            Cash on Delivery
          </label>
        </div>

        {selectedPaymentMethod === 'credit' && (
          <div className="credit-form">
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                value={formValues.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && <small className="error">{errors.cardNumber}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="validThru">Valid Thru (MM/YY)</label>
              <input
                id="validThru"
                name="validThru"
                type="text"
                value={formValues.validThru}
                onChange={handleChange}
              />
              {errors.validThru && <small className="error">{errors.validThru}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv"
                type="text"
                value={formValues.cvv}
                onChange={handleChange}
              />
              {errors.cvv && <small className="error">{errors.cvv}</small>}
            </div>
            <button type="submit">Pay ₹{totalAmount}</button>
          </div>
        )}

        {selectedPaymentMethod === 'upi' && (
          <div className="upi-form">
            <div className="form-group">
              <label htmlFor="upiId">UPI ID</label>
              <input
                id="upiId"
                name="upiId"
                type="text"
                value={formValues.upiId}
                onChange={handleChange}
              />
              {errors.upiId && <small className="error">{errors.upiId}</small>}
            </div>
            <button type="submit">Pay ₹{totalAmount}</button>
          </div>
        )}

        {selectedPaymentMethod === 'cod' && (
          <div className="cod-form">
            <button type="submit">Place Order</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Payment;

