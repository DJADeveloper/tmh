import React, { useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Icon from "../Icon";

const Form = ({ className, placeholder }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9-+() ]{7,15}$/;

  function handleSubmit(event) {
    event.preventDefault();

    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!isValid) {
      return;
    }

    // Reset form fields immediately after submission for better UX
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

    fetch("http://localhost:5001/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setStatusMessage(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatusMessage("Failed to send email.");
      });
  }

  return (
    <form
      className={cn(styles.form, className)}
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="Your Name"
        required
      />
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="Enter your email"
        required
      />
      {emailError && (
        <div className={cn(styles.errorMessage)}>{emailError}</div>
      )}
      <input
        className={styles.input}
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        placeholder="phone"
        required
      />
      {phoneError && (
        <div className={cn(styles.errorMessage)}>{phoneError}</div>
      )}
      <input
        className={styles.input}
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        name="subject"
        placeholder="Subject"
        required
      />
      <textarea
        className={cn(styles.input, styles.textarea)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        placeholder="Your message"
        required
      />{" "}
      {statusMessage && <div className={cn(styles.text)}>{statusMessage}</div>}
      <button type="submit" className={styles.btn}>
        <Icon name="arrow-right" size="14" />
      </button>
    </form>
  );
};

export default Form;
