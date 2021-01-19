import React from 'react';
import PropTypes from 'prop-types';
import styles from './transaction.module.css';

const Transaction = ({items}) => {
    return (
        <div>
            <table className={styles.transactionhistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>               
                 {items.map(item=>(
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                ))}
                </tbody>  
            </table>
        </div>
    );
};



Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,   
            type: PropTypes.string.isRequired,   
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),  
};

export default Transaction;