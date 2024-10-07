import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";
function ContactForm() {
  const [DataContact, setDataContact] = useState({
    name: "",
    email: "",
    walletId: "",
    imageURL: "",
  });
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");

  const handleChange = (e) => {
    setDataContact({
      ...DataContact,
      [e.target.id]: e.target.value,
      createdAt: new Date(), // Add createdAt field
    });
  };
  const ShowError = (errorResponse) => {
    if (errorResponse) {
      setError(errorResponse.message);
    }
    setTimeout(() => {
      setError("");
    }, 5000);
  };
  const ShowSuccess = () => {
    setDataContact({
      name: "",
      email: "",
      imageURL: "",
      walletId: "",
    });
    setSuccess("Contact saved successfully");
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const SaveContact = () => {
    Meteor.call("insertContact", { DataContact }, (errorResponse) => {
      if (errorResponse) {
        ShowError(errorResponse);
      } else {
        ShowSuccess();
      }
    });
  };

  return (
    <form className="mt-6">
      {Error && <ErrorAlert message={Error} />}
      {Success && <SuccessAlert message={Success} />}
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
        </div>
        <div className="col-span-6">
          <label
            htmlFor="walletId"
            className="block text-sm font-medium text-gray-700  "
          >
            Wallet ID
          </label>
          <input
            type="string"
            id="walletId"
            value={DataContact.walletId}
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
