import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { finalClassName } from 'services/class-name';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span
                className={
                    isOnline
                        ? finalClassName(css.status, css.online)
                        : finalClassName(css.status, css.ofline)
                }
            ></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
