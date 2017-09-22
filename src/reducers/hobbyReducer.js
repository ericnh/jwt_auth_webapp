import initialState from './initialState';

export default function hobbyReducer(state = initialState.hobbies, action){
  switch(action.type) {
    case 'LOAD_HOBBIES_SUCCESS':
      return action.hobbies
    default:
      return state
  }
}
