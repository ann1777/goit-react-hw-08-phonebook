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
  selectFilteredContacts,
} from 'redux/phonebook/phonebook-selectors';
import { theme } from 'theme';

function ContactList() {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  console.log('I am hereFetching contacts', contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Icon>
                <FaUser size={16} fill={theme.colors.accent} />
                <span>{name} :</span>
              </Icon>
              <Icon>
                <FaPhoneAlt size={16} fill={theme.colors.accent} />
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
