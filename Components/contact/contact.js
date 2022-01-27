import { useState, useRef, useEffect } from "react";

import classes from "./contact.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const [reqStatus, setReqStatus] = useState();

  useEffect(() => {
    if (
      reqStatus === "pending" ||
      reqStatus === "error" ||
      reqStatus === "success"
    ) {
      const timer = setTimeout(() => {
        setReqStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  async function onSubmitHandler(e) {
    e.preventDefault();
    setReqStatus("pending");
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setReqStatus("error");
      throw new Error(data.message || "Something went wrong!");
    }
    setReqStatus("success");
  }

  let notification;

  if (reqStatus == "pending") {
    notification = {
      status: "pending",
      title: "Sending message..",
      message: "Your msg is on its way!",
    };
  }

  if (reqStatus == "success") {
    notification = {
      status: "success",
      title: "Sending message successful",
      message: "You message has been sent!",
    };
  }

  if (reqStatus == "error") {
    notification = {
      status: "error",
      title: "Error sending message..",
      message: "Error occured while sending the message!!",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">You Email</label>
            <input ref={emailRef} type="email " id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">You Name</label>
            <input ref={nameRef} type="text " id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea ref={messageRef} id="message" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
