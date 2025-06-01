import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    let allContacts = await readContacts();
    const countContacts = allContacts.length;

    if (countContacts === 0) {
      console.log('No contacts exist');
    } else {
      return countContacts;
    }
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
