import React from 'react';

const Header = () => {
  const menus = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'About',
    },
    {
      id: 3,
      name: 'Services',
    },
  ];

  return (
    <nav className="flex justify-between">
      <div className="border-4 px-4 py-2 font-semibold border-blue-600">
        Youngaroo_Dev_Stacks
      </div>
      <ul className="flex space-x-4">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className="border-4 px-4 py-2 font-semibold border-blue-600"
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
