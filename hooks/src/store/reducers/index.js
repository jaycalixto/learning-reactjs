export const Types = {
  LOGIN: 'LOGIN',
  MULTIPLY_7 : 'MULTIPLY_7',
  DIVIDE_25 : 'DIVIDE_25',
  PARSE_TO_INT : 'PARSE TO INT',
  ADD_N : 'Add N number',
};

export function reducer(state, action) {
  switch(action.type) {
  case Types.LOGIN:
    return {
      ...state,
      user: { name: action.payload },
    };
  case Types.MULTIPLY_7:
    return {
      ...state,
      number: state.number * 7,
    };
  case Types.DIVIDE_25:
    return {
      ...state,
      number: state.number / 25,
    };
  case Types.PARSE_TO_INT:
    return {
      ...state,
      number: parseInt(state.number),
    };
  case Types.ADD_N:
    return {
      ...state,
      number: state.number + action.payload,
    };
  default:
    return state;
  }
};
