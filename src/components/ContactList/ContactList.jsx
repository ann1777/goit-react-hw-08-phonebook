import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ContactItem, DeleteButton } from './ContactList.styled';
import {
  fetchContactsThunk,
  deleteContactThunk,
} from 'redux/phonebook/phonebook-operations';
import {
  selectPhones,
  selectFilter,
} from 'redux/phonebook/phonebook-selectors';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  const contacts = useSelector(selectPhones);
  console.log("I am hereFetching contacts", contacts);
  const filter = useSelector(selectFilteredContacts);
  console.log(filter);
  console.log(contacts);
  const filteredContacts = contacts.filter(el => {
    console.log("Filtered el", el);
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>{name} :</span>
            <span>{number}</span>
            <DeleteButton
              type="button"
              onClick={() => dispatcher(deleteContactThunk(id))}
            >
              Remove
            </DeleteButton>
          </ContactItem>
        );
      })}
    </List>
  );
}

export default ContactList;
