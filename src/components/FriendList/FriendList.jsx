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
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span className={friend.isOnline ? 'active' : 'inactive'}></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
