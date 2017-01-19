import {LOAD_POSITION, LOAD_FORMATTED_ADDRESS} from '../constants/index'
const INITIAL_STATE = {formattedAddress: 'Tbilisi, Georgia', currentLocation: null}

export default function(state = INITIAL_STATE, action){
  switch (action.type){
    case LOAD_POSITION:
      console.log(action.payload);
      return { ...state, currentLocation: action.payload}
    case 'LOAD_FORMATTED_ADDRESS':
      console.log(action.payload)
      return { ...state, formattedAddress: action.payload.data.results[0]['formatted_address'] }
    default:
      return state
  }
}
