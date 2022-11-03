import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/asyncThunk';
import style from './ContactItem.module.css';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  const onDeleteClick = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting...';
      e.target.setAttribute('disabled', 'true');
    }
    dispatch(deleteContact(id))
  }

  return (
    <li className={style.contact}>
      <p>{name}: {number}</p>
      <button id={id} onClick={(e) => onDeleteClick(e, id)}>Delete</button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired,),
}