import type { FC } from 'react';
import { css } from '@emotion/react'
import TailwindLogo from '@/images/tailwind-logo.svg';

const headerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2rem;

  & li,button {
    font-size: 14px;
    background-color: transparent;
    color: black;
    font-weight: 600;
  }
`;

const menuListStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;

  padding: 0;
`;

const menuItemStyle = css`
  list-style: none;
`;

const loginButtonStyle = css`
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: inherit;
`;


const Header: FC = () => {
  return (
    <header css={headerStyle}>
      <img src={TailwindLogo} width={40}/>
      <ul css={menuListStyle}>
        <li css={menuItemStyle}>menu1</li>
        <li css={menuItemStyle}>menu2</li>
        <li css={menuItemStyle}>menu3</li>
        <li css={menuItemStyle}>menu4</li>
      </ul>
      <button css={loginButtonStyle}>
        <span css={css`margin-right: 10px;`}>login</span>
        →
      </button>
    </header>
  );
};

export default Header;
