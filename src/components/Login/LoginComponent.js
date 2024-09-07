import React, { useState } from 'react'
import "./LoginComponent.css"


const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formValid, setFormValid] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let emailError = '';
    let passwordError = '';

    // Email validation
    if (!email) {
      emailError = 'Email is required';
    } else if (!emailRegex.test(email)) {
      emailError = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      passwordError = 'Password is required';
    } else if (password.length < 8) {
      passwordError = 'Password must be at least 8 characters';
    }

    setErrors({ email: emailError, password: passwordError });
    setFormValid(!emailError && !passwordError);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  validateForm();

  if (formValid) {
    const loginData = {
      email,
      password,
    };

    // Sending the data using fetch
    fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        const contentType = response.headers.get("Content-Type");

        // Check if the response is JSON
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse JSON response
        } else {
          // If not JSON, return the raw text response to inspect it
          return response.text().then((text) => {
            console.error("Raw response:", text);
            throw new Error("Response is not JSON");
          });
        }
      })
      .then((data) => {
        // Handle the JSON response
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }
};


  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form__group">
            <button className="btn btn--green" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginComponent;