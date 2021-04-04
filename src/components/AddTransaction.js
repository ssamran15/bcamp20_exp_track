import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    
    const [descrip, setDescription] = useState('');
    const [transactionValue, setTransactionValue] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTrans = {
            id: new Date().getTime(),
            descrip,
            transactionValue: +transactionValue
        };
        addTransaction(newTrans);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={ onSubmit }>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text"
                            id="descrip"
                            value={descrip} 
                            onChange={ (e) => setDescription(e.target.value) }
                            placeholder="Details of Transaction" />
                </div>

                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionValue"
                            value={transactionValue}
                            onChange={ (e) => setTransactionValue(e.target.value) }
                            placeholder="Value of Transaction in $" />
                </div>

                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}