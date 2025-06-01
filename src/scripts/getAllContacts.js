import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    let allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
