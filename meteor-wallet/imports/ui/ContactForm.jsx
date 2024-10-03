import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

function ContactForm() {
  const [DataContact, setDataContact] = useState({
    name: "",
    email: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setDataContact({
      ...DataContact,
      [e.target.id]: e.target.value,
    });
  };
  const SaveContact = () => {
    console.log("Data:", DataContact);
    ContactsCollection.insert({
      name: DataContact.name,
      email: DataContact.email,
      imageURL: DataContact.imageURL,
    });
    setDataContact({
      name: "",
      email: "",
      imageURL: "",
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={DataContact.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={DataContact.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          id="imageURL"
          value={DataContact.imageURL}
          onChange={handleChange}
        />
        <div>
          <button type="button" onClick={SaveContact}>
            Save Contact
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
