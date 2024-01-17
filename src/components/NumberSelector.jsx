
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
      Quandos numeros deseja sortear?
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
