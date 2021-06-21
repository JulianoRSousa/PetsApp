import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  id?: string | undefined;
  email?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  birthdate?: string;
  profilePictureUrl?: string;
  followersCount?: number;
  postsCount?: number;
  petsCount?: number;
};

interface AuthContextData {
  signed: boolean;
  user: User | null | undefined;
  loading: boolean;
  signIn(email: string, pass: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, pass) {
    setLoading(true)
    try {
      const response = await auth.signIn(email, pass);
      setUser(response.user);

      api.defaults.headers.Authorization = `Baerer ${response.token}`;

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
    } catch (error) {
      console.log(error)
      if(error.auth){
        console.log('errorrr')
      }
    }
    setLoading(false)
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }


  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };