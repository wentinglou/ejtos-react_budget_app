import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (value) => {
        dispatch(
            {
                type: 'SET_BUDGET',
                payload: value
            }
        )
    }
    return (
        <div className="alert alert-secondary">
            <label for="budget">{'Budget:' + currency}</label>
            <input
                defaultValue={budget}
                type="number"
                max={20000}
                min={totalExpenses}
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
            />
        </div>
    );
};
export default Budget;

