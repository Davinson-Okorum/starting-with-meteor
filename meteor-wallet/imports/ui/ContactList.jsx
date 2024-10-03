import React, { useEffect } from "react";
import { useTracker, useSubscribe } from "meteor/react-meteor-data";
import { ContactsCollection } from "../api/ContactsCollection";
function ContactList() {
  const isLoading = useSubscribe("contacts");

  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });
  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>Contact List</h3>
      {contacts.map((contact, index) => (
        <li key={contact.email}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </>
  );
}

export default ContactList;
