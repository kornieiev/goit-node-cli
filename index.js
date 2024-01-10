const contacts = require("./contacts"); // пакет для коректного прописування маршруту до файлів. входить до стандартного пакету node.js

// import { program } from "commander";
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse();

// const options = program.opts();

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
      // ... id
      break;

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

// invokeAction(options);
