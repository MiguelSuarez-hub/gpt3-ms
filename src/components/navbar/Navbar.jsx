import React, { useState } from 'react';

import './navbar.css';
import{ RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/logo.svg';

const LinkMenu = ({ classNameString }) => (
  <ul className={classNameString}>
    <li><a href='#home'>Home</a></li>
    <li><a href='#wgpt3'>What is GPT?</a></li>
    <li><a href='#possibility'>Open AI</a></li>
    <li><a href='#features'>Case Studies</a></li>
    <li><a href='#blog'>Library</a></li>
  </ul>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={Logo} alt='logo' />
        </div>
        <LinkMenu classNameString='gpt3__navbar-links_container' />
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <LinkMenu classNameString='gpt3__navbar-menu_container-links' />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar