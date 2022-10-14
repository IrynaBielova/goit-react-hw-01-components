import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {ListOfFriend, ListItem, IsOnlineMark, FriendImg, FriendName} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
        <Box
        width="30vw" 
        mx="auto" 
        as="section">
            <ListOfFriend>
                {friends.map(({id, isOnline, avatar, name}) => (
                    <ListItem key={id}>
                        <IsOnlineMark isOnline={isOnline}></IsOnlineMark>
                        <FriendImg src={avatar} alt="User avatar" width={48}/>
                        <FriendName>{name}</FriendName>
                    </ListItem>
                ))}
            </ListOfFriend>
        </Box>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };
