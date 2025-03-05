import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import '../styles/about.css';

function About() {
  const { theme, toggleTheme } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
    billingAddress: '',
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setBillingSameAsShipping(e.target.checked);
    if (e.target.checked) {
      setFormData((prev) => ({ ...prev, billingAddress: formData.address }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormMessage('Thank you for reaching out! We will get back to you soon.');
    setFormSubmitted(true);
    setErrors({});
    e.target.reset();
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`about-page ${theme}`}>
      <div className="button-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <section className="about-header">
        <h1>About Game Showcase</h1>
        <p>
          Game Showcase is a platform designed to explore, rate, and discover amazing games.
          This project demonstrates the power of React, routing, state management, and modern web design.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, feel free to get in touch!</p>
        <form onSubmit={handleFormSubmit} noValidate>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleFormChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleFormChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleFormChange}
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </label>
          <label htmlFor="address">
            Shipping Address:
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your shipping address"
              value={formData.address}
              onChange={handleFormChange}
            />
          </label>
          <label htmlFor="billing-same-as-shipping">
            <input
              type="checkbox"
              id="billing-same-as-shipping"
              name="billingSameAsShipping"
              checked={billingSameAsShipping}
              onChange={handleCheckboxChange}
            />
            Billing address same as shipping address
          </label>
          {!billingSameAsShipping && (
            <label htmlFor="billingAddress">
              Billing Address:
              <input
                type="text"
                id="billingAddress"
                name="billingAddress"
                placeholder="Enter your billing address"
                value={formData.billingAddress}
                onChange={handleFormChange}
              />
            </label>
          )}
          <button type="submit">Submit</button>
        </form>

        {formSubmitted && <p className="form-message">{formMessage}</p>}
      </section>
    </div>
  );
}

export default About;