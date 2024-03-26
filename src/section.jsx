import React from 'react';
import background from './assets/images/bg-intro-desktop.svg';
import phone from './assets/images/image-mockups.png';
import './section.css';

export default function Section() {
  return (
    <div className='sectionMain'>
      <div id='sectionOne'>
        <div id='writingForSection'>
          <h2>Next Generation<br />digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>
          <button>Request Invite</button>
        </div>
      </div>
      <div id='background'>
        <img src={background} alt="" />
      </div>
      <div id='sectionTwo'>
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
}