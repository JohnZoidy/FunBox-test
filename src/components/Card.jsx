/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Card = ({ data }) => {
  const [state, changeState] = useState(data.empty ? 'disable' : '');
  const stateHandler = (st) => {
    switch (st) {
      case 'active': changeState(''); break;
      case 'disable': changeState('disable'); break;
      default: changeState('active'); break;
    }
  };
  const signGenerator = (st) => {
    switch (st) {
      case 'active': return (<p>{data.sign}</p>);
      case 'disable': return (<p className="end">{`Печалька, ${data.taste} закончился`}</p>);
      default: return (
        <p>
          Чего сидишь? Порадуй котэ,
          {' '}
          <button type="button" onClick={() => stateHandler(state)}>купи.</button>
        </p>
      );
    }
  };
  return (
    <div>
      <div
        className={`card ${state}`}
        onClick={() => stateHandler(state)}
        role="menuitem"
        tabIndex={data.id}
      >
        <div className="head">
          <div className="corner" />
          <div className="head__title">
            <p>{data.title}</p>
          </div>
        </div>
        <div className="cardBody">
          <h1>{data.name}</h1>
          <h3>{data.taste}</h3>
          <p>
            {`${data.piecesCount} порций`}
            <br />
            {data.gift}
            <br />
            {data.special}
            <br />
          </p>
          <div className="weight">
            <h3>{data.weight}</h3>
            <p>кг</p>
          </div>
        </div>
      </div>
      <div className="sign">
        {signGenerator(state)}
      </div>
    </div>
  );
};

export default Card;
