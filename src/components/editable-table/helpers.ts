import { IContact } from './types';

export const url = 'http://localhost:3000/contacts';

export const getLocalContacts = JSON.parse(localStorage.getItem('contacts'));

export const setLocalContacts = (
  item: IContact[],
): void => localStorage.setItem('contacts', JSON.stringify(item));
