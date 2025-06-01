import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let allContacts = await readContacts();
    if (allContacts.length === 0) {
      console.log('No contacts exist');
      return;
    }
    allContacts.pop();
    return await writeContacts(allContacts);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
