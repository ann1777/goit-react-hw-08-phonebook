import { createSelector } from '@reduxjs/toolkit';

export const selectPhones = state => state.contacts.contacts;
export const getFilterValue = state => state.filter;
export const getContactsList = state => state.contacts;
export const selectFilter2 = state => state.filter;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = state => state.filter;

export const selectContacts = ({ contacts }) =>
  [...contacts].sort((a, b) => a.name.localeCompare(b.name));

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);

export const getFiltredContactsList = createSelector(
  [getFilterValue, getContactsList],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizeFilter) ||
          number.includes(normalizeFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
export const getError = state => state.contacts.error;

export const getLoadingStatus = state => state.contacts.isLoading;
