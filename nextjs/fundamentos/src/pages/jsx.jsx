export default function Jsx() {
  const titulo = <h1>JSX!</h1>;
  const a = 2;
  const b = 5;

  function subtitulo() {
    return <h2>{"aopa".toUpperCase()}</h2>;
  }

  return (
    <div>
      <div>
        {titulo}
      </div>
      { a * b }
      <div>
        {Math.random()}
      </div>
      <div>
        {"Texto".toUpperCase()}
      </div>
      <div>
        {subtitulo()}
      </div>
      <div>
        {JSON.stringify({hello: "world"})}
      </div>
    </div>
  );
}
