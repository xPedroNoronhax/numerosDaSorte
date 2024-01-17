import { useState } from 'react';
import Button from './Button';
import NumberSelector from './NumberSelector';

const Options = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedNumbers, setSelectedNumbers] = useState(6);
  const [drawnNumbers, setDrawnNumbers] = useState([]);

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
    // Defina valores padrão para números ao selecionar um tópico
    switch (topic) {
      case 'Mega-Sena':
        setSelectedNumbers(6);
        break;
      case 'Quina':
        setSelectedNumbers(5);
        break;
      case 'Loto-Fácil':
        setSelectedNumbers(15);
        break;
      default:
        setSelectedNumbers(6);
    }
  };

  const handleNumberChange = (e) => {
    setSelectedNumbers(parseInt(e.target.value, 10));
  };

  const drawNumbers = () => {
    const minRange = 1;
    let maxRange;

    switch (selectedTopic) {
      case 'Mega-Sena':
        maxRange = 60;
        break;
      case 'Quina':
        maxRange = 80;
        break;
      case 'Loto-Fácil':
        maxRange = 25;
        break;
      default:
        maxRange = 60;
    }

    const drawn = [];

    while (drawn.length < selectedNumbers) {
      const randomNum = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      if (!drawn.includes(randomNum)) {
        drawn.push(randomNum);
      }
    }

    setDrawnNumbers(drawn);
  };


  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      <h2 className='text-2xl font-bold text-green-600 whitespace-nowrap'>
        Em qual sorteio você deseja ficar rico?
      </h2>

      <div className='flex justify-evenly w-8/12 '>
        <Button
          onClick={() => handleSelect('Mega-Sena')}
          className='font-bold button-41 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md shadow-md cursor-pointer inline-block font-inter h-11 leading-11 outline-none overflow-hidden px-5 select-none whitespace-nowrap'
        >
          Mega-Sena
        </Button>
        <Button
          onClick={() => handleSelect('Quina')}
          className='font-bold button-41 bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded-md shadow-md cursor-pointer inline-block font-inter h-11 leading-11 outline-none overflow-hidden px-5 select-none whitespace-nowrap'
        >
          Quina
        </Button>
        <Button
          onClick={() => handleSelect('Loto-Fácil')}
          className='font-bold button-41 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-md shadow-md cursor-pointer inline-block font-inter h-11 leading-11 outline-none overflow-hidden px-5 select-none whitespace-nowrap'
        >
          Loto-Fácil
        </Button>
      </div>

      {!selectedTopic ? (
        <h3 className='text-2xl font-bold text-green-600 whitespace-nowrap'>Escolha o sorteio que deseja realizar</h3>
      ) : (
        <div className='mt-5 flex flex-col items-center justify-center gap-4'>
          <h3 className='text-2xl font-bold text-green-600 whitespace-nowrap'>Vamos de: {selectedTopic} !</h3>
          {/* Componente NumberSelector utilizado aqui */}
          <NumberSelector
            selectedTopic={selectedTopic}
            selectedNumbers={selectedNumbers}
            onChange={handleNumberChange}
          />
          <Button onClick={drawNumbers} className='font-bold button-41 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-md shadow-md cursor-pointer inline-block font-inter h-11 leading-11 outline-none overflow-hidden px-5 select-none whitespace-nowrap max-w-52 min-w-52	' >Sortear</Button>

          {drawnNumbers.length > 0 && (
            <p className='text-lg text-center font-bold'>Números sorteados : <br /> {drawnNumbers.join(', ')}</p>
          )}
        </div>
      )
      
      }

      <div>
       
      </div>
    </div>
  );
};

export default Options;
