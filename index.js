const contacts = require("./contacts");
const { program } = require("commander");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log("allContacts:", allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log("oneContact:", oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log("newContact:", newContact);

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      return console.log("deletedContact:", deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Petro",
//   email: "petro@sobaka.ua",
//   phone: "zero-zero-seven",
// });
// invokeAction({
//   action: "remove",
//   id: "IjDp2V5MQhfrEHp3lQvrW",
// });

// invokeAction(options);

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
console.log("options:", options);
invokeAction(options);
