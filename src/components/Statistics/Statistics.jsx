import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from 'components/statistics-item/StatisticsItem';

export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css['stat-list']}>
                {data.map(item => {
                    return (
                        <StatisticsItem
                            key={item.id}
                            label={item.label}
                            percentage={item.percentage}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
};
