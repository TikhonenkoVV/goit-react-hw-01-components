import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from 'components/statistics-item/StatisticsItem';

export const Statistics = ({ title, data }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
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
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
};
