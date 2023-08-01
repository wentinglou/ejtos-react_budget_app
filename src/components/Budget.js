import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <label for="budget">{'Budget:' + currency}</label>
            <input type="number" value={budget} max="20000" />
        </div>
    );
};
export default Budget;

