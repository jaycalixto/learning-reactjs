function MyIf({ children, test }) {
  const elseChild = children.filter((child) => child.type && child.type.name === 'MyElse')[0];

  const ifChildren = children.filter((child) => child !== elseChild);

  if (test) {
    return ifChildren;
  }

  if (elseChild) {
    return elseChild;
  }
  return false;
}

export function MyElse({ children }) {
  return children;
}

export default MyIf;
