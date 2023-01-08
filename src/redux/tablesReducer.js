import { API_URL } from '../config';
import { changeStatus } from './requestStatusReducer';

//selectors
export const getAllTables = ({ tables }) => tables;

export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

// actions
const createActionName = (action) => {
  return `app/tables/${action}`;
};

const GET_DATA = createActionName('GET_DATA');

const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

export const fetchData = () => {
  return (dispatch) => {
    dispatch(changeStatus(true));
    fetch(`${API_URL}/tables`)
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)))
      .then(() => dispatch(changeStatus(false)));
  };
};

export const editTableRequest = (editedTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTable),
    };

    fetch(`${API_URL}/tables/${editedTable.id}`, options)
      .then((response) => response.json())
      .then((data) => dispatch(editTable(data)));
  };
};

// reducer
export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) => {
        if (table.id === action.payload.id) {
          return { ...table, ...action.payload };
        } else {
          return table;
        }
      });
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};
