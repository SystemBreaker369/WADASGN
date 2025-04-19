import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  HeaderContainer,
  Navigation,
  Logo,
  NavLinks,
  NavLink,
  UserInfo,
  LogoutButton,
} from './Header.styled';

export const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Navigation>
        <Logo to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
            alt="MediDelivery logo"
            width="30"
            height="30"
          />
          <span>MediDelivery</span>
        </Logo>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pharmacies">Pharmacies</NavLink>
          <NavLink to="/cart">Cart</NavLink>

          {currentUser ? (
            <UserInfo>
              <span>Hello, {currentUser.name}</span>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </UserInfo>
          ) : (
            <>
              <NavLink to="/login">Sign In</NavLink>
              <NavLink to="/register" highlight="true">
                Sign Up
              </NavLink>
            </>
          )}
        </NavLinks>
      </Navigation>
    </HeaderContainer>
  );
};
