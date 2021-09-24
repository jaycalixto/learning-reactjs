import React from 'react';

function UseStateDiv({ children }) {
  return <div className="UseState">{children}</div>;
}

function DivCenter({ children }) {
  return <div className="center">{children}</div>;
}

function SpanText({ children }) {
  return <div className="text">{ children }</div>;
}

function Button({ children, onClick }) {
  return <button className="btn" onClick={onClick}>{children}</button>;
}

function Input({ onChange, value, type}) {
  return <input type={type || "text"} className="input" value={value} onChange={onChange} />;
}

export { UseStateDiv, DivCenter, SpanText, Button, Input };
