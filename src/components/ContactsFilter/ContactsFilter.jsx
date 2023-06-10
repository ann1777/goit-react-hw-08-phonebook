import React from 'react';
import { Input, FilterWrapper } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/phonebook/phonebook-slice';

function ContactsFilter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onFilterChange = e => dispatch(setFilter(e.target.value));

  return (
    <FilterWrapper>
      <Input
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChange}
        placeholder="Find contacts by name"
      />
    </FilterWrapper>
  );
}

export default ContactsFilter;
