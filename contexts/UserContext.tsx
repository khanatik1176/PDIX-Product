'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/superbaseClient';
import Cookies from 'js-cookie';

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const getSessionAndSetCookie = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        Cookies.set('user_data', JSON.stringify(data.session.user), { expires: 7 });
        setUserData(data.session.user);
      }
    };
    getSessionAndSetCookie();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserDetails = () => useContext(UserContext);