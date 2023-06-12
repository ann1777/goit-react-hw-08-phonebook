import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/selectors";

export const selectPhones = state => state.contacts.contacts;
export const getFilterValue = state => state.filter;
export const getContactsList = state => state.contacts;
export const selectFilter2 = state => state.filter;

export const getFiltredContactsList = createSelector(
    [getFilterValue, getContactsList],
    (filter, contacts) => {
      const normalizeFilter = filter.toLowerCase();
      return contacts
        .filter(
          ({ name, number }) =>
            name.toLowerCase().includes(normalizeFilter) ||
            number.includes(normalizeFilter),
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  );
  export const getError = state => state.contacts.error;
  
  export const getLoadingStatus = state => state.contacts.isLoading;
  