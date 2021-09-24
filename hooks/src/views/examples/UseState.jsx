import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { Input, UseStateDiv, DivCenter, SpanText, Button } from '../../components/MiscComponents';

const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <UseStateDiv>
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício 1" />
      <DivCenter>
        <SpanText>{count}</SpanText>
        <div>
          <Button onClick={() => setCount(0) }>0</Button>
          <Button onClick={() => setCount(count+1) }>+1</Button>
          <Button onClick={() => setCount(count-1) }>-1</Button>
          <Button onClick={() => setCount(current => current + 1000) }>+1000</Button>
        </div>
      </DivCenter>

      <SectionTitle title="Exercício 2" />
      <Input value={name} onChange={e => setName(e.target.value) } />
      <SpanText>{name}</SpanText>
      
    </UseStateDiv>
  );
}

export default UseState;
