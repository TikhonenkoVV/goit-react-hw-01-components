import PropTypes from 'prop-types';
import { Stats } from 'components/Stats/Stats';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const statsArray = Object.entries(stats);
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>&#64;{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                {statsArray.map(element => {
                    return (
                        <Stats
                            key={element[0]}
                            label={element[0]}
                            quantity={element[1]}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
