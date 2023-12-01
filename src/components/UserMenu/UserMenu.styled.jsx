import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const UserName = styled.h2`
  align-items: center;
  color: #030101;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
`;
export const ButtonLogOut = styled.button`
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
`;
