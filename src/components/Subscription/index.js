import React, { useState } from "react";
import cn from "classnames";
import styles from "./Subscription.module.sass";
import Icon from "../Icon";

const Subscription = ({ className, placeholder }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Send the email to the backend or third-party service for subscription
    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setStatusMessage("Thank you for subscribing!");
          setEmail(""); // Clear the email input for better UX
        } else {
          setStatusMessage("Subscription failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatusMessage("An error occurred. Please try again.");
      });
  };

  return (
    <form
      className={cn(styles.form, className)}
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder={placeholder}
        required
      />
      {emailError && (
        <div className={cn(styles.errorMessage)}>{emailError}</div>
      )}
      <button className={styles.btn}>
        <Icon name="arrow-right" size="14" />
      </button>
      {statusMessage && (
        <div className={cn(styles.statusMessage)}>{statusMessage}</div>
      )}
    </form>
  );
};

export default Subscription;
