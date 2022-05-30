import { useReducer, useState } from 'react';

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function UseReducerBank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="contents">
      <h2 className="contents-title">useReducer 은행에 오신것을 환영합니다.</h2>
      <p className="contents-text">잔고 : {money} 원</p>
      <div className="useReducer-form">
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.deposit, payload: number });
          }}
        >
          예금
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.withdraw, payload: number });
          }}
        >
          출금
        </button>
      </div>
    </div>
  );
}

export default UseReducerBank;
