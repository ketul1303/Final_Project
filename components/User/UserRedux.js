import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchuserAsync } from "./UserSlice";

const UserRedux = () => {
  const dispatch = useDispatch();
  const { loading, userList } = useSelector((state) => state.users);
  const handleuser = () => {
    dispatch(fetchuserAsync());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User With Redux</h1>
      <br />
      <button onClick={handleuser}>Click to Show User</button>
      {loading ? (
        <div> Loading </div>
      ) : (
        userList.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
};

export default UserRedux;
