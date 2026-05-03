"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';
import { UpdateModal } from './UpdateModal';

const Profile = () => {
    const {data:session}=authClient.useSession()
   
    return (
      <div className="container bg-neutral mx-auto p-4 ">
  <div className="bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile Details</h1>
    <div className="flex  p-2 items-center space-x-4">
      <Avatar className="w-16 h-16">
        <Avatar.Image
          alt={session?.user?.name}
          src={session?.user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>
          {session?.user?.name?.charAt(0).toUpperCase() || "?"}
        </Avatar.Fallback>
      </Avatar>
      <div>
        <p className="text-2xl font-semibold text-gray-700">
          Name:{session?.user?.name}
        </p>
        <p className="text-sm text-gray-500">Email: {session?.user?.email}</p>
      </div>
    </div>
      <UpdateModal/>
  </div>
</div>

    );
};

export default Profile;