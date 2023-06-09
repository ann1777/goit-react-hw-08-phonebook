import { Section } from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactList from 'components/ContactList/ContactList';
import { theme } from 'components/theme';
import { Title } from 'components/Title/Title';

export const PhonebookPage = () => {
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

