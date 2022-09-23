import React from "react";
import { getCurrentUser } from "../services/auth.service";
import jwt_decode from "jwt-decode";


function Profile() {
  const currentUser = getCurrentUser();
  const token: any = jwt_decode(currentUser);
  console.log(token);

  const profileInfo = {
      userName: token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
      role: token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{profileInfo.userName}</strong> Profile
        </h3>
      </header>
    </div>
  );
};

export default Profile;