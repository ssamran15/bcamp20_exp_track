import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);
    const sign = transaction.transactionValue > 0 ? '+' : '-';
    const type = transaction.transactionValue > 0 ? 'plus' : 'minus';

    return (
        <li className={type}>
            { transaction.descrip }
            <span>{sign}${Math.abs(transaction.transactionValue)}</span>
            <button className="delete-btn"
                    onClick={ () => delTransaction(transaction.id) }>x</button>
        </li>
    );
}