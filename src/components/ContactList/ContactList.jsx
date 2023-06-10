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

function ContactList() {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  const contacts = useSelector(selectPhones);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(el => {
    console.log(el);
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
