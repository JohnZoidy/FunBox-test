import React from 'react';
import Card from './Card.jsx';

const App = () => {
  const data = [
    {
      id: 0,
      title: 'Сказочное заморское яство',
      name: 'Нямушка',
      taste: 'с курой',
      piecesCount: 100,
      gift: '5 мышей в подарок',
      special: 'заказчик доволен',
      sign: 'Филе из цыплят с трюфелями в бульоне.',
      weight: '5',
      empty: false,
    },
    {
      id: 1,
      title: 'Сказочное заморское яство',
      name: 'Нямушка',
      taste: 'с рыбой',
      piecesCount: 40,
      gift: '2 мыши в подарок',
      special: '',
      sign: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      weight: '2',
      empty: false,
    },
    {
      id: 2,
      title: 'Сказочное заморское яство',
      name: 'Нямушка',
      taste: 'с фуа-гра',
      piecesCount: 10,
      gift: 'мышь в подарок',
      special: '',
      sign: 'Печень утки разварная с артишоками.',
      weight: '0,5',
      empty: true,
    },
  ];

  return (
    <div className="plate">
      <h2>Ты сегодня покормил кота?</h2>
      <div className="cards">
        {data.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default App;
