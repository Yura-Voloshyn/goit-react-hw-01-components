// import FriendListItem from './FriendListItem';
// import friends from '../jsonData/friends.json';
// import FriendListItem from './FriendListItem';
// const FriendList = ({friends}) => {
//   return (
//     <ul className="friend-list">
//       {friends.map(friend => (
//         <FriendListItem
//           key={friend.id}
//           avatar={friend.avatar}
//           name={friend.name}
//           isOnline={friend.isOnline}
//         />
//       ))}
//     </ul>
//   );
// };
import PropTypes from 'prop-types';
import {
  Container,
  FriendCard,
  FriendName,
  FriendAvatar,
  FriendOnlineStatus,
} from 'components/FriendList/FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <FriendOnlineStatus isOnline={friend.isOnline}></FriendOnlineStatus>
          <FriendAvatar src={friend.avatar} alt={friend.name} />
          <FriendName>{friend.name}</FriendName>
        </FriendCard>
      ))}
    </Container>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
