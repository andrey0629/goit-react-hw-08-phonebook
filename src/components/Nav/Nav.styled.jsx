import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  align-items: center;
  border: 0;
  background-color: #367def;
  border-radius: 8px;
  box-shadow: rgba(65, 99, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #030101;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;

  padding: 7px 14px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &.active {
    color: #0a0a0a;
    background-color: #f5f50a;
    outline: 0;
  }
`;
