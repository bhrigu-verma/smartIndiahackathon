import React from 'react';
import { useUser } from '@clerk/clerk-react';

const Profile = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn || !user) {
    return null; // Show nothing if the user is not signed in
  }

  console.log(user); // Log user object to check available properties

  return (
    <div className="flex items-center p-4  bg-inherit   select-none">
      
        <div className="w-10 h-10 rounded-full text-center text-2xl bg-gray-400  items-center justify-center  text-white font-bold">
          {user.firstName?.charAt(0)}
        </div>
      
      <div className="flex flex-col">
        <p className="md:text-lg hidden md:flex  text-[13px] font-medium text-zinc-200 ">{user.fullName}</p>
        <p className="text-sm hidden md:flex text-gray-300">{user.emailAddresses[0].emailAddress}</p>
      </div>
    </div>
  );
};

export default Profile;
