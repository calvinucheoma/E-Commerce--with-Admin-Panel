'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const AuthProvider: React.FC<PropsType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
