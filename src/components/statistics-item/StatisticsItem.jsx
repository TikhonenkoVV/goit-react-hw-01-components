import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';
import { getRandomHexColor } from 'services/randomize-color';

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
        >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
