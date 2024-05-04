import React from 'react';


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black h-full w-full px-24 py-0 m-0">{children}</div>
  );
};
