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

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    fetch("http://localhost:5001/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatusMessage(data.message);
      })

      .catch((error) => {
        console.error("Error:", error);
        setStatusMessage("Failed to send email."); // Set failure message
      });
    form.reset(); // Reset form;
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
      <input
        className={styles.input}
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        placeholder="phone"
        required
      />
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
      {statusMessage && <div className={cn(styles.text)}>{statusMessage}</div>}{" "}
      <button type="submit" className={styles.btn}>
        <Icon name="arrow-right" size="14" />
      </button>
    </form>
  );
};

export default Form;
