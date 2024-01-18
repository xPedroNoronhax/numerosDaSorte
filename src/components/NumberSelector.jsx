
// o numberSelector é um componente que irá fazer o papel do select.
//ele recebeu como selectedTopic e selectedNumbers que são estados que estão em options, que e o componente principal de renderização dos estados necessarios na aplicacao.
//o select precisa apresentar o numero minimo e o numero maximo de numeros a serem jogados.
//exemplo aposta minima da mega é 6 e a maxima 15. entao dentro desse select ira conter opções de 1 a 15.
// o getNumberRange é composto por um array de objetos que contem duas propriedades, min e max.
// quando a constante é criada, se utiliza js para atribuir o minimo e maximo.
//nessa constante é passado como parametro selectedTopic, podendo ser(mega,quina e loto.)

const NumberSelector = ({ selectedTopic, selectedNumbers, onChange }) => {
  const getNumberRange = () => {
    switch (selectedTopic) {
      case 'Mega-Sena':
        return { min: 6, max: 15 };
      case 'Quina':
        return { min: 5, max: 15 };
      case 'Loto-Fácil':
        return { min: 15, max: 20 };
      default:
        return { min: 6, max: 15 };
    }
  };

  const { min, max } = getNumberRange();

  return (
    <label className="text-xl font-bold">
      Quantos numeros deseja sortear?
      <select className="ml-3 text-center" value={selectedNumbers} onChange={onChange}>
        {[...Array(max - min + 1).keys()].map((i) => (
          <option key={min + i} value={min + i}>
            {min + i}
          </option>
        ))}
      </select>
    </label>
  );
};

export default NumberSelector;
