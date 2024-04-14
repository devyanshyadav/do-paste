import React, { useEffect } from "react";
import { RiUser6Fill } from "react-icons/ri";
import useStore from "../../lib/ZustStore";
import { RiGoogleFill } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";

function ProfileLogo() {
  const { googleLogin, initialState, logout, getCurrentUser } = useStore((state) => state);
  const [dropdown, setDropdown] = React.useState(false);

  const handleLogout = () => {
    setDropdown(false);
    logout();
  }

  const handleDashboard = () => {
    setDropdown(false);
  }
  useEffect(() => {
    getCurrentUser();
    // console.log("Initial State:", initialState);
    // console.log("User Status:", initialState.userStatus);
    if(initialState.userStatus){
      // console.log("Login Successfull")
    }
  }, [ googleLogin, getCurrentUser, initialState.userStatus]);
  

  return (
    <div
    onClick={() => setDropdown(!dropdown)}
      className={` cursor-pointer border-solid hover:shadow-md ${
        initialState.userStatus
          ? "bg-primary p-2 "
          : " px-2 py-1 bg-white"
      } border  border-secondary rounded-full   w-fit fixed top-2 right-10 if ` }
    >
      {initialState.userStatus ? (
        <div className="relative">
          <RiUser6Fill className="text-2xl text-secondary"  />

          <div className={`absolute end-0 z-10 top-10  w-56 rounded-md border border-gray-100 ${dropdown ? "block" : "hidden"} bg-white shadow-lg`}>
            <div className="p-2">
              <p className="block rounded-lg px-4 py-2 text-md text-secondary hover:bg-gray-50 hover:text-gray-700" onClick={handleDashboard}>
                Dashboard
              </p>
              <button className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-md text-red-700 hover:bg-red-50" onClick={handleLogout}>
                <RiLogoutBoxLine/>
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="px-2  bg-white py-1 flex gap-2 items-center text-sm"
          onClick={googleLogin}
        >
          <span className="text-secondary font-semibold">
            {" "}
            Login with Google
          </span>{" "}
          <RiGoogleFill className="text-2xl text-secondary" />
        </div>
      )}
    </div>
  );
}

export default ProfileLogo;
