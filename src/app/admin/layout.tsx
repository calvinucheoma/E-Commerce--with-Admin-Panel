'use client';

import Loader from '@/components/admin-panel/Loader';
import Login from '@/components/admin-panel/Login';
import Navbar from '@/components/admin-panel/Navbar';
import Sidebar from '@/components/admin-panel/Sidebar';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store: RootState) => store.loading);

  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default AdminLayout;
