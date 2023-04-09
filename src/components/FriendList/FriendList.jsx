import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ data }) => {
    return (
        <ul className={css['friend-list']}>
            {data.map(item => {
                return (
                    <FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                );
            })}
        </ul>
    );
};

FriendList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
};
