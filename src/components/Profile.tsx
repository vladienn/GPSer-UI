import React from "react";
import { getCurrentUser } from "../services/auth.service";
import jwt_decode from "jwt-decode";


function Profile() {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser?.userName}</strong>
          <strong>{currentUser?.role}</strong> 

        </h3>
      </header>
    </div>
  );
};

export default Profile;