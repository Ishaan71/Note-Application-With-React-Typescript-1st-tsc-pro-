import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <>
    <div className="bg-blue-500 text-white p-4 font-bold text-2xl text-center">
      <h1>React + Typescript Note Application</h1>
    </div>
    </>
  );
};

export default Header;