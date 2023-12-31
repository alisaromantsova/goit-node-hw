const { getContactById, addContact, listContacts, removeContact } = require("./contacts");
const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknown action");
  }
};

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
invokeAction(argv);
