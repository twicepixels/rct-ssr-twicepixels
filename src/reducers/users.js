import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from '../constants';


export default function users(state = null, action) {
  if (state === null) {
    return {
      users: null,
    };
  }

  switch (action.type) {

    case LOAD_USERS_START: {
      const users = state[action.payload.users] ? action.payload.users : state.users;
      return {
        ...state,
        users,
      };
    }

    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.users,

      };
    }

    case LOAD_USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    
    default: {
      return state;
    }
  }
}
