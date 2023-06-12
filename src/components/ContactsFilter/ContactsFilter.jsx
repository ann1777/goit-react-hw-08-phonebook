import React, { useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import { Input, FilterWrapper, FilterButton } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/phonebook/phonebook-selectors';
import { setFilterValue } from 'redux/phonebook/phonebook-slice';

function ContactsFilter() {
  const [toggle, setToggle] = useState(false);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleClickFilterBtn = () => dispatch(setToggle(!toggle));

  return (
    <FilterWrapper>
      <Input
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={event => dispatch(setFilterValue(event.target.value))}
        placeholder="Find contacts by name"
      />
      <FilterButton onClick={handleClickFilterBtn}>
        <RiUserAddFill />
      </FilterButton>
    </FilterWrapper>
  );
}

export default ContactsFilter;
