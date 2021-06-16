import { PromiseProvider } from "mongoose";
import React from "react";

export const ContactForm = (
 props) => {

  const phoneChange = (e) => {
    props.setPhone(e.target.value);
  }

  const emailChange = (e) => {
    props.setEmail(e.target.value);
  }

  const nameChange = (e) => {
    props.setName(e.target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Name" value={props.name} onChange={nameChange} />
      <input type="tel"  placeholder="Phone" value={props.phone} onChange={phoneChange}/>
      <input type="email" placeholder="Email" value={props.email} onChange={emailChange}/>
      <input type="submit"/>
    </form>
  );
};
