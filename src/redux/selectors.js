import { createSelector } from '@reduxjs/toolkit';

// auth
export const selectToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// contacts
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = ({ filter }) => filter;

export const selectContacts = ({ contacts }) =>
  [...contacts.items].sort((a, b) => a.name.localeCompare(b.name));

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
