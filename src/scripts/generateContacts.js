import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const allContacts = await readContacts();

  let newContacts = [];
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }
  const updatedContacts = [...allContacts, ...newContacts];

  try {
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(3);
