import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const TransactionDetails = () => {

    const { transactions } = useContext(GlobalContext);
    const transAmount = transactions.map(transaction => transaction.transactionValue);

    const income = transAmount.filter(transaction => transaction > 0)
    .reduce((acc, transaction)=> (acc += transaction), 0)
    .toFixed(2);

    const expense = transAmount.filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

    return (<div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">
                +${ income }
            </p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p className="money minus">
                -${ expense }
            </p>
        </div>
    </div>);
}