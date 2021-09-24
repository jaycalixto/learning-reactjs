import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { DivCenter, Input } from '../../components/MiscComponents';

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;

  return calcFatorial(n-1) * n;
}

const UseEffect = (props) => {

  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício 01" />

      <DivCenter>
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial < 0? 'Não existe' : fatorial}</span>
        </div>
        <Input type="number" value={number} onChange={e => setNumber(e.target.value) } />
      </DivCenter>

      <SectionTitle title="Exercício 02" />
      <DivCenter>
        TODO
      </DivCenter>

    </div>
  );
}

export default UseEffect;
