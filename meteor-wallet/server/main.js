import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../imports/api/ContactsCollection';

Meteor.startup(async () => {
  //create el publish

  Meteor.publish("contacts", function () {
    return ContactsCollection.find({});
  });
});
