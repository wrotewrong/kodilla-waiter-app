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
    fetch('http://localhost:3131/api/tables')
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)));
  };
};

export const editTableRequest = (editedTable) => {
  return () => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTable),
    };

    fetch(`http://localhost:3131/api/tables/${editedTable.id}`, options);
  };
};

// reducer
export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) => {
        if (table.id === action.payload.id) {
          return { ...action.payload };
        } else return table;
      });
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};
