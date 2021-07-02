import React from 'react';
import alunos from '../../data/alunos';
/* import PropTypes from 'prop-types';
 *  */
function ListaAlunos() {
  const alunosLis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}. {aluno.nome} -&gt; {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>{alunosLis}</ul>
    </div>
  );
}

/* ListaAlunos.propTypes = {
 *   children: PropTypes.any
 * };
 *  */
export default ListaAlunos;
