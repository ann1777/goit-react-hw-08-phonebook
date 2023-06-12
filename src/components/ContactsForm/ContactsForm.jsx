import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/phonebook/phonebook-operations';
import { getFiltredContactsList } from 'redux/phonebook/phonebook-selectors';
import {
  Form,
  FormField,
  InputField,
  StyledButton,
  LabelWrapper,
} from './ContactsForm.styled';
import { toast } from 'react-toastify';


function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getFiltredContactsList);
  // console.log(contacts);

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onInputChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(3),
      name,
      number,
    };
    // if (contacts.filter(el => el.name.toLowerCase() === name.toLowerCase())) {
    //   return toast.error(`${name} is already in contacts.`);
    // }
    const item = contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
    if( item) {
      toast.error(`${name} is already in contacts.`)
    }
    else {
      dispatch(addContactThunk(newContact));
      toast.success(`Contact ${newContact.name} created`);
      setName('');
      setNumber('');
    }
 
  };

  return (
    <>
      <Form onSubmit={handleSubmit} 
     
        >
        <FormField htmlFor="name">
          <LabelWrapper>Name:</LabelWrapper>
          <InputField
            type="text"
            name="name"
            placeholder="name"
            onChange={onNameChange}
            value={name || ''}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <FormField htmlFor="number">
          <LabelWrapper>Number:</LabelWrapper>
          <InputField
            type="tel"
            name="number"
            placeholder="+380*********"
            onChange={onInputChange}
            value={number || ''}
            pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormField>
        <StyledButton type="submit">AddContact</StyledButton>
      </Form>
    </>
  );
}

export default ContactsForm;
