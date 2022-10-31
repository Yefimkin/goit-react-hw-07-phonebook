import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/acyncThunk';
import style from './Contact.module.css';
import Button from '../../Button/Button';

function Contact({ name, number, idx, id }) {
  const dispatch = useDispatch();
  return (
    <li className={style.contact}>
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
