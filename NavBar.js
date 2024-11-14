import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <Menu className="navbar" borderless>
      <Menu.Item as={Link} to="/" header>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/post">
        Post
      </Menu.Item>
      <Menu.Item as={Link} to="/questions">
        Find Questions
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
