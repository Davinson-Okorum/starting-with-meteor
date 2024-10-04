import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from 'meteor/meteor';
const isDataContactValid = (DataContact) => {
  return Object.values(DataContact).every(value => value !== "");
};

const insertContact = ({DataContact}) => {
    if (!isDataContactValid(DataContact)) {
        throw new Meteor.Error(Object.keys(DataContact).filter( key => DataContact[key] === ""), "All fields are required");
    }
       return ContactsCollection.insertAsync(DataContact);
}
const removeContact = ({contactId}) => {
    return ContactsCollection.removeAsync(contactId);
}

Meteor.methods({
    insertContact,
    removeContact
});

