import User from "./User";

const UserList = (props) => {
    return (
        <div className="mt-10 space-y-3">
            {
                props.users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
}

export default UserList;