import React, { useEffect } from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { List, ContactItem, DeleteButton, Icon } from './ContactList.styled';
import {
  fetchContactsThunk,
  deleteContactThunk,
} from 'redux/phonebook/phonebook-operations';
import {
  getFiltredContactsList,
  getLoadingStatus,
} from 'redux/phonebook/phonebook-selectors';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  console.log('I am hereFetching contacts', contacts);
  const filter = useSelector(selectFilteredContacts);
  console.log(filter);
  console.log(contacts);
  const filteredContacts = contacts.filter(el => {
    console.log('Filtered el', el);
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Icon>
                <FaUser size={16} />
                <span>{name} :</span>
              </Icon>
              <Icon>
                <FaPhoneAlt size={16} />
                <span>{number}</span>
              </Icon>
              <DeleteButton
                type="button"
                onClick={() => dispatcher(deleteContactThunk(id))}
              >
                Remove
              </DeleteButton>
            </ContactItem>
          );
        })}
      {isLoading && <div>Loading...</div>}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;
