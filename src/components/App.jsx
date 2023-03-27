import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './Global.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
