import types from './types';
import { Contact } from '../../reducer/contacts';

export interface ContactAction {
  type: string;
  data: Contact;
}

const deleteContact = () => async (dispatch: any) => {
  dispatch({
    type: types.DELETE_CONTACT_PENDING,
  });
};

export { deleteContact };
