import React from 'react';

import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';

const linksData = [
  {
    title:'Links',
    links:['Overons', 'Social Media', 'Counters', 'Contact' ]
  },
  {
    title:'Company',
    links:['Terms & Conditions', 'Privacy Policy', 'Contact' ]
  },
  {
    title:'Get in touch',
    links:['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net' ]
  }
];

const LinkColumn = ({ title, links }) => (
  <div className='gpt3__footer-links_column'>
    <h4>{title}</h4>
    {links.map((item, index)=> <a href='#' key={item + index}>{item}</a>
    )};
  </div>
)

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>       
      </div>
      <div className='gpt3__footer-button'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {linksData.map((item, index) =>
        <LinkColumn title={item.title} links={item.links} key={item.title + index}/>
        )}     
      </div>
      <div className='gpt3__footer-developed'>
        <p>This webapp was developed with React and Vite</p>
        <div className='gpt3__footer-developed_content'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <p>+</p>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>     
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer