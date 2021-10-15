import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import {initialState, reducer, Types, Multiply7 } from '../../store';

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
            onClick={() => dispatch({type: Types.LOGIN, payload: 'New user'}) }
          >
            login
          </button>
          <button className="btn" onClick={() => dispatch({type: Types.ADD_N, payload: 2}) }>
            +2
          </button>
          <button className="btn" onClick={() => Multiply7(dispatch) }>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({type: Types.DIVIDE_25}) }>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({type: Types.PARSE_TO_INT}) }>
            Int
          </button>
          <button className="btn" onClick={() => dispatch({type: Types.ADD_N, payload: -9}) }>
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;

