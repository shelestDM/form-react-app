import NewUserForm from "./components/NewUser/NewUserForm";
import { useState } from "react";
import UserList from "./components/Users/UserList";

const App = () => {

  const [userList, setUserList] = useState([]);
  
  const getNewUserHandler = (user) => {
    setUserList((previosUsers)=>{
      return [user, ...previosUsers, ]
    });
    console.log(user);
  }

  return (
    <div>
      <NewUserForm getNewUser={getNewUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;