const fs = require("fs/promises");
const path = require("path");

// const { nanoid } = require("nanoid.js");
// import { nanoid } from "nanoid";
import { nanoid } from "nanoid";

console.log(nanoid);

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  // Повертає масив контактів.
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  console.log("contacts:", contacts);
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;

  // Повертає об'єкт доданого контакту (з id).
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

module.exports = { listContacts, getContactById, removeContact, addContact };
