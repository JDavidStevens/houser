const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  image: '',
  mortage: 0,
  rent: 0
};

const UPDATE_INPUT_NAME = 'UPDATE_INPUT_NAME';
const UPDATE_INPUT_ADDRESS = 'UPDATE_INPUT_ADDRESS';
const UPDATE_INPUT_CITY = 'UPDATE_INPUT_CITY';
const UPDATE_INPUT_STATE = 'UPDATE_INPUT_STATE';
const UPDATE_INPUT_ZIPCODE = 'UPDATE_INPUT_ZIPCODE';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_INPUT_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_INPUT_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_INPUT_STATE:
      return Object.assign({}, state, { state: action.payload });
    case UPDATE_INPUT_ZIPCODE:
      return Object.assign({}, state, { zipcode: action.payload });
    default:
      return state;
  }
}

export function inputName(name) {
  return {
    type: UPDATE_INPUT_NAME,
    payload: name
  };
}
export function inputAddress(address) {
  return {
    type: UPDATE_INPUT_ADDRESS,
    payload: address
  };
}
export function inputCity(city) {
  return {
    type: UPDATE_INPUT_CITY,
    payload: city
  };
}

export function inputState(state) {
  return {
    type: UPDATE_INPUT_STATE,
    payload: state
  };
}
export function inputZipcode(zipcode) {
  return {
    type: UPDATE_INPUT_ZIPCODE,
    payload: zipcode
  };
}
