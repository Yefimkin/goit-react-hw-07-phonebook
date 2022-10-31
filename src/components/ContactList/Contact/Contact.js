import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/ContactsSlice';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import Button from '../../Button/Button';

function Contact({ name, number, idx, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contact}>
      <p>
        {idx + 1} - {name}: {number}
      </p>
      <Button
        onClick={() => dispatch(deleteContact(id))}
        text="Delete"
        type="button"
      />
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
  }),
};
