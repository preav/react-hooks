import React, { useContext } from "react";
import Third from "./Third";
import { UserContext } from "../context";

function Second() {
  const user = useContext(UserContext);
  return (
    <div className="second">
      <b>This is Second Component</b>
      <div>
        Name: {user.fname} {user.lname}
      </div>
      <div>Age: {user.age}</div>
      <Third />
    </div>
  );
}

export default Second;
