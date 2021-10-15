import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  thing: 'abc',
  number: 0,
  other: 'a',
  user: null,
};

const MULTIPLY_7 = 'MULTIPLY_7';
const DIVIDE_25 = 'DIVIDE_25';
const PARSE_TO_INT = 'PARSE TO INT';
const ADD_N = 'Add N number';

function reducer(state, action) {
  switch(action.type) {
    case 'number_add2':
      return {
        ...state,
        number: state.number + 2,
      };
    case 'login':
      return {
        ...state,
        user: { name: action.payload },
      };
    case MULTIPLY_7:
      return {
        ...state,
        number: state.number * 7,
      };
    case DIVIDE_25:
      return {
        ...state,
        number: state.number / 25,
      };
    case PARSE_TO_INT:
      return {
        ...state,
        number: parseInt(state.number),
      };
    case ADD_N:
      return {
        ...state,
        number: state.number + action.payload,
      };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ?
         <span className="text">{state.user.name}</span> :
         <span className="text">no user</span> }
        <span className="text">
          {state.number}
        </span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({type: 'login', payload: 'New user'}) }
          >
            login
          </button>
          <button className="btn" onClick={() => dispatch({type: 'number_add2'}) }>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({type: MULTIPLY_7}) }>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({type: DIVIDE_25}) }>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({type: PARSE_TO_INT}) }>
            Int
          </button>
          <button className="btn" onClick={() => dispatch({type: ADD_N, payload: -9}) }>
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;

