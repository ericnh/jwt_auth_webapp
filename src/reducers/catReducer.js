import initialState from './initialState';

export default function catReducer(state = initialState.cats, action){
  switch(action.type) {
    case 'LOAD_CATS_SUCCESS':
      return action.cats
    default:
      return state
  }
}
