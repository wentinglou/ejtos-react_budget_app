import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    const map = new Map(Object.entries({
        '$': 'Dollar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Ruppee'
    }));

    return (
        <div className='alert alert-success'> Currency {
            <select className='alert alert-success' name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value={currency}>{currency + ' ' + map.get(currency)}</option>
                {Array.from(map.keys()).map(k => k !== currency && <option value={k}>{k + ' ' + map.get(k)}</option>)}
            </select>
        }
        </div>
    );
};
export default Currency;