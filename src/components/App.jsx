// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import ContactList from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Section>
          <Title title="Phonebook" />
          <ContactsForm/>
          <Title title="Contacts" />
          <ContactsFilter/>
          <ContactList/>
        </Section>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
export default App;
