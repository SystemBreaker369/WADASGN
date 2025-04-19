import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-button-hover);

  span {
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text-and-icon);
  font-weight: 500;
  position: relative;
  transition: color 0.2s;
  font-size: 1rem;

  ${props =>
    props.highlight === 'true' &&
    `
    background-color: var(--color-button);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    
    &:hover {
      background-color: var(--color-button-hover);
    }
  `}

  &:not([highlight="true"]):after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-button);
    transition: width 0.2s;
  }

  &:not([highlight='true']):hover {
    color: var(--color-button-hover);

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 500;
    color: var(--color-text-and-icon);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    span {
      font-size: 0.9rem;
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: var(--color-button);
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: var(--color-button-hover);
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
