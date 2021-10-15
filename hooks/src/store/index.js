import { Types, reducer } from './reducers/index.js';
import { Multiply7 } from './actions/number.js';

export const initialState = {
  thing: 'abc',
  number: 0,
  other: 'a',
  user: null,
};

export { reducer, Types, Multiply7 };

