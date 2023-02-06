import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/filter.slice';
import { getFilter } from 'redux/selectors';
import styles from './ContactsFilter.module.css';
import PropTypes from 'prop-types';

export const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onQueryChenged = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <>
      <h4 className={styles.label}>Find your contact by name</h4>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onQueryChenged}
        value={filter}
      />
    </>
  );
};

Event.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
