import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';
const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #787882;
  margin-bottom: 5px;
  border-radius: 5px;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ContactText = styled.p`
  margin: 0;
  font-weight: 500;

  font-size: large;
`;

const DeleteButton = styled(Button)`
  background: #f87979 !important;
  border-radius: 100px;
  box-shadow: rgba(187, 44, 44, 0.2) 0 -25px 18px -14px inset,
    rgba(187, 44, 44, 0.15) 0 1px 2px, rgba(187, 44, 44, 0.15) 0 2px 4px,
    rgba(187, 44, 44, 0.15) 0 4px 8px, rgba(187, 44, 44, 0.15) 0 8px 16px,
    rgba(187, 44, 44, 0.15) 0 16px 32px;
  color: #020d04;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(187, 44, 44, 0.35) 0 -25px 18px -14px inset,
      rgba(187, 44, 44, 0.25) 0 1px 2px, rgba(187, 44, 44, 0.25) 0 2px 4px,
      rgba(187, 44, 44, 0.25) 0 4px 8px, rgba(187, 44, 44, 0.25) 0 8px 16px,
      rgba(187, 44, 44, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
const ButtonWrap = styled.div`
  gap: 8px;
  display: flex;
`;
const ButtonEdit = styled(Button)`
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: #13bd13 !important;
    transform: scale(1.05) rotate(-1deg);
  }
`;
export const ContactWrap = styled.div`
  display: flex;
  gap: 5px;
`;
export { List, ListItem, ContactText, ButtonWrap, DeleteButton, ButtonEdit };
