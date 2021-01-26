/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { navigate, Router } from '@reach/router';
import './App.css';

const SuccessView = ({ money, recipient }) => (<h1>{money}€ was sent to {recipient}</h1>);

const View = () => {
  const [state, setState] = useState({ money: 500, recipient: 'Jesus' });

  const handleClick = () => navigate(`/${state.money}/${state.recipient}`);

  useEffect(() => {
    setState({ money: 100000, recipient: 'Bernd' });
  }, []);

  return (<div className="container">
    <div className="row">
      <div className="column">
        <div>
          <label htmlFor="money">Amount</label>
          <input name="money" id="money" onChange={(event) => setState(event.target.value)} value={`${state.money}€`} />
        </div>
        <div>
          <label htmlFor="recipient">Who do you want to send it to?</label>
          <input name="recipient" id="recipient" onChange={(event) => setState(event.target.value)} value={`${state.recipient}`} />
        </div>
        <div>
          <button onClick={handleClick}>Send my greetings</button>
        </div>
      </div>
    </div>
  </div>);
};

function App() {
  return (
    <Router >
      <View path="/" />
      <SuccessView path="/:money/:recipient" />
    </Router>
  );
}

export default App;
