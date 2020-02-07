import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';

import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  SET_ALERT,
  REMOVE_ALERT
} from './types';

const ContactState = props => {
  const initialState = {
    contacts: []
  };
};
