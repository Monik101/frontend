import { css } from '@emotion/css';

// Comments

/**
 * make header sticky
 * components folder // Components name in capital
 * add emotion
 * 
 * const SIDE_LIST = [{
    name: 'My Feed',
    icon: <FeedOutlinedIcon />
}, {
  {SIDE_LIST.map(listItem => <Sidelist name={listItem.name} icon={listItem.icon} />)}
}]
https://fonts.google.com/specimen/Plus+Jakarta+Sans?query=plus+jaka
font-family: 'Plus Jakarta Sans', sans-serif;
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

sidebar scrolling functionality
responsive behaviour
sidebar baehaviour in mobile

react router

 */

export const chatboxStyles = css`
  position: fixed;
  z-index: 2147483003;
  padding: 0;
  margin: 0;
  border: none;
  bottom: 30px;
  right: 25px;
  max-width: 60px;
  width: 60px;
  max-height: 60px;
  height: 60px;
  border-radius: 50%;
  background: #5c8ef9;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);
  transition: transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00);
  box-sizing: content-box;
  transform: scale(1.2);
  align-self: baseline;

`;