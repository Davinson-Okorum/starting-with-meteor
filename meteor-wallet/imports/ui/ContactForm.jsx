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
    <form className="mt-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700  "
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={DataContact.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700  "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={DataContact.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="imageURL"
            className="block text-sm font-medium text-gray-700  "
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            value={DataContact.imageURL}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="px-2 py-3 text-right">
            <button
              type="button"
              onClick={SaveContact}
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
