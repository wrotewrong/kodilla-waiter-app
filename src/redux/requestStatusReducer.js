//selectors
export const getStatus = ({ tableRequestPending }) => tableRequestPending;

// actions
const createActionName = (action) => {
  return `app/status/${action}`;
};

const CHANGE_STATUS = createActionName('CHANGE_STATUS');

//action_creators
export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});

// reducer
export const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      return action.payload;
    }
    default:
      return statePart;
  }
};
