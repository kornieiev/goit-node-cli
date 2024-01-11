const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");
// import { nanoid } from "nanoid";

// console.log(nanoid);

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

function line() {
  return "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=";
}

async function listContacts() {
  console.log(line());
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
  // Повертає масив контактів.
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    return result || null;
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(data) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }

  // Повертає об'єкт доданого контакту (з id).
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }

  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
