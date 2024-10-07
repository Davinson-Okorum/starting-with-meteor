import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../imports/api/ContactsCollection";
import { ContactsMethods } from "../imports/api/ContactsMethods";
import { ContactsPublications } from "../imports/api/ContactsPublications";
import { WalletsCollection } from "../imports/api/WalletsCollection";
import { WalletsPublications } from "../imports/api/WalletsPublications";
import { TransactionsCollection } from "../imports/api/TransactionsCollection";
import { TransactionsMethods } from "../imports/api/TransactionsMethods";
import SimpleSchema from "simpl-schema";
import "../infra/CustomError";
const walletSchema = new SimpleSchema({
  balance: {
    type: Number,
    min: 0,
    defaultValue: 0,
  },
  currency: {
    type: String,
    allowedValues: ["USD", "EUR", "COP"],
    defaultValue: "USD",
  },
  createdAt: {
    type: Date,
  },
});

Meteor.startup(async () => {
  if (!WalletsCollection.find().countAsync()) {
    const walletData = { balance: 0, currency: "USD", createdAt: new Date() };
    const cleanWallet = walletSchema.clean(walletData);
    walletSchema.validate(cleanWallet);
    WalletsCollection.insertAsync(walletData);
  }
});
