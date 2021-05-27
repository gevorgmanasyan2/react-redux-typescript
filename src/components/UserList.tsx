import React, { FC, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const UserList: FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(users);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
