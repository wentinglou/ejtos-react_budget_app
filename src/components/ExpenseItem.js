import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleIncrease = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: props.name,
                cost: 10
            },
        });
    };
    const handleDecrease = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            },
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncrease}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecrease}></FaMinusCircle></td>
        </tr>
    );
};
export default ExpenseItem;
