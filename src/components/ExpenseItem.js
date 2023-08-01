import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
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
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        });
    };
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency + props.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncrease}></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecrease}></FaMinusCircle></td>
            <td><FaTimesCircle size='1.2em' color="black" onClick={handleDelete}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;
