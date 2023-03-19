import { FC, useState } from 'react';
import { css } from '@emotion/react'
import TailwindLogo from '@/images/tailwind-logo.svg';
import HamburgerIcon from '@/images/hamburger.svg';
import { mq } from '../../../utils/mediaQuery';
import AnimatedDrawerIcon from './AnimatedDrawerIcon';
import { useCycle } from 'framer-motion';

const headerStyle = css`
  padding: 1.5rem 2rem;

  & li,button {
    font-size: 14px;
    background-color: transparent;
    color: black;
    font-weight: 600;
  }
`;

const navStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const menuListStyle = css(mq({
  display: ['none', 'none', 'flex'],
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '3rem',
  padding: 0,
}));

const menuItemStyle = css`
  list-style: none;
`;

const loginButtonStyle = css(mq({
  display: ['none', 'none', 'block'],
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
}));

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const Header: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header css={headerStyle}>
      <nav css={navStyle}>
        <img src={TailwindLogo} width={30}/>
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
        <AnimatedDrawerIcon 
          initial={false}
          animate={isOpen ? "open" : "closed"}
          toggle={toggleOpen}
        />
      </nav>
    </header>
  );
};

export default Header;
