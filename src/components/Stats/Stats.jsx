import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Stats = ({ label, quantity }) => {
    return (
        <li className={css['stats-item']}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{quantity}</span>
        </li>
    );
};

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};
