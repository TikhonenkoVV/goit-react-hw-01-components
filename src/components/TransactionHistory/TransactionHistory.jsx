import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ data }) => {
    return (
        <table className={css['transaction-history']}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return (
                        <TransactionHistoryItem
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
};
