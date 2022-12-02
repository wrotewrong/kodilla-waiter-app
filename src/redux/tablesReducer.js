//selectors
export const getAllTables = ({ tables }) => tables;

// actions
const createActionName = (action) => {
  return `app/tables/${action}`;
};

const GET_DATA = createActionName('GET_DATA');

// action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)));
  };
};

// reducer
export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};
