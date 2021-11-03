import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCustomerAction, removeCustomerAction} from "./store/reducers/customerReducer";
import {addCashAction, getCashAction} from "./store/reducers/cashReducer";


export const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = cash => dispatch(addCashAction(cash));
    const getCash = cash => dispatch(getCashAction(cash));
    const addCustomer = name => {
        const customer = {
            name,
            id: Date.now()
        };
        dispatch(addCustomerAction(customer))
    };
    const removeCustomer = customer => dispatch(removeCustomerAction(customer.id));

    return (
        <div className='App'>
            <div>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
                <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
                <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {
                        customers.map((customer, index) =>
                            <div>{customer.name} <span style={{color: 'red'}}
                                                       onClick={() => removeCustomer(customer)}>✖</span></div>)
                    }
                </div>
                :
                <h1>Customers not found</h1>}
        </div>
    );
};
