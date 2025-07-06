"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserDetailsContext } from '../context/UserDetailsContext';

export type UserDetailsContextType= {
    name: string;
    email: string;
    credits: number;
    createdAt: Date;
    updatedAt: Date;
}

const Provider = ({ children }: { children: React.ReactNode }) => {

    const [userDetails, setUserDetails] = useState<any>(undefined);

    const { user } = useUser();

    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
            const response = await axios.post('/api/users');
            console.log(response.data);
    }


  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default Provider