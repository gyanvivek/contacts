import { types, actions } from '../actions/contacts';

const data = [
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '1',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '2',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '3',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '4',
  },
];

export type Contact = {
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
};

export const initialState = {
  data: data,
  loading: false,
};

export default (oldState = initialState, action: actions.ContactAction) => {
  const { type, data } = action;
  switch (type) {
    case types.DELETE_CONTACT_PENDING:
      return {
        ...oldState,
        loading: true,
      };
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...oldState,
        data: oldState.data.filter(item => {
          if (item.id === data.id) {
            return false;
          } else return true;
        }),
        loading: false,
      };
    default:
      return oldState;
  }
};
