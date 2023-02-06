import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import styles from './ContactList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = e => {
    dispatch(deleteContact(e.target.dataset.id));
  };

  return (
    <ul className={styles.list}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.item}>
            <p className={styles.text}>{`${name} : ${number}`}</p>
            <button
              className={styles.btn}
              onClick={onDeleteContact}
              type="button"
              data-id={id}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};
