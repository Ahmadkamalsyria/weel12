const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

// remember to write a constructor function
let jimmy = new Contact("Jimmy", 28);
let Ahmad = new Contact("Ahmad", 27);

jimmy.addPhone("55551234");
Ahmad.addPhone("42306667");
// jimmy.call();
// should say "Calling Jimmy at 55551234..."

// jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

// console.log(JSON.stringify(jimmy));
// console.log(jimmy instanceof Contact);

let contacts = new ContactList("contacts1.json");
let readContacts = new ContactList("readme.json");

contacts.addContact(jimmy);
contacts.addContact({ name: "Jane" });
contacts.addContact(new Contact("Jane"));

readContacts.addContact(Ahmad);
readContacts.addContact({ name: "Jane" });
readContacts.addContact(new Contact("Jane"));

console.log(contacts);
console.log(readContacts);
console.log(readContacts instanceof ContactList);
readContacts.load()
    .then(console.log("contacts read"))
    .catch(console.log);
readContacts.save()
    .then(() => { console.log("Contacts written") })
    .catch(console.log);
contacts.save()
    .then(() => { console.log("Contacts written") })
    .catch(console.log);
