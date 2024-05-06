import { createContext, PropsWithChildren, useContext, useState } from 'react';

//import { User } from '../types/User';

export const AuthContext = createContext<any>(null);

type AuthProviderProps = PropsWithChildren

export default function AuthProvider({
  children
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const [currentUser, setCurrentUser] = useState(false);

  return <AuthContext.Provider value={{
    currentUser,
    setCurrentUser
  }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};