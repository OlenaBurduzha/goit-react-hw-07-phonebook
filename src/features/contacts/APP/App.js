import { CreateContact } from '../Form/CreateContact';
import { ContactsFilter } from '../Filter/ContactsFilter';
import { ContactsList } from '../Contacts/ContactsList';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <CreateContact />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
