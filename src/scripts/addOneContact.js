import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let allContacts = await readContacts();
  const contact = createFakeContact();
  allContacts.push(contact);
  try {
    await writeContacts(allContacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
