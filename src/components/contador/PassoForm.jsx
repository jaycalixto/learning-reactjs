import React from 'react';
/* import PropTypes from 'prop-types';
 *  */
function PassoForm({ passo, setPasso }) {
  return (
    <div>
      <label htmlFor="passoInput">
        Passo: <input id="passoInput" type="number" value={passo} onChange={(e) => setPasso(+e.target.value)} />
      </label>
    </div>
  );
}

/* PassoForm.propTypes = {
 *     setPasso: PropTypes.function,
 *     passo: PropTypes.number
 * };
 *  */
export default PassoForm;
