import React from 'react';

function BtnInc({ inc, children }) {
  return (<button className="btn" onClick={inc}>{children}</button>);
}

function UseCallbackButtons({ inc }) {
  console.log('rendering');
  return (<div>
    <BtnInc inc={() => inc(-1) }>-1</BtnInc>
    <BtnInc inc={() => inc(6) }>+6</BtnInc>
    <BtnInc inc={() => inc(12) }>+12</BtnInc>
    <BtnInc inc={() => inc(18) }>+18</BtnInc>
  </div>);
}

export default React.memo(UseCallbackButtons);
