import React, { useState } from "react";

import { Header } from "../components/Styles";
import { useErrorHandler } from "../utils/errorHandler";
export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { error, showError } = useErrorHandler(null);

  function validateForm() {
    return user.email.length > 0 && user.password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleChange = event => {
    const { value, name } = event.target;
    setUser({
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={user.email}
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="human@store.com"
      />
      <input
        value={user.password}
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit" disabled={!validateForm()}>
        LOGIN
      </button>
    </form>
  );
}
