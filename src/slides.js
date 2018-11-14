import React from 'react'
import { TitleSlide, ContentSlide, Step, Code } from 'react-presents'
import './App.css';
import manifestCode from './snippets/manifest.json'

const slides = [];

slides.push(() => (
  <TitleSlide>
    <h1>Building Web Extensions</h1>
  </TitleSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Web Extensions</h1>
    <ul>
      <Step index={1}>
        <li>Personalize your browser experience</li>
      </Step>
      <Step index={2}>
        <li>Extend browser functionality</li>
      </Step>
      <Step index={3}>
        <li>Cross browser compatibility</li>
      </Step>
      <Step index={4}>
        <li>Created using web-based technologies (HTML/CSS/JS)</li>
      </Step>
    </ul>
  </ContentSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Anatomy of Web Extensions</h1>
    <img
      className='page-img'
      alt=''
      src='https://mdn.mozillademos.org/files/13669/webextension-anatomy.png'
    />
  </ContentSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>manifest.js</h1>
    <Code
      value={JSON.stringify(manifestCode, null, 2)}
    />
  </ContentSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Content Scripts</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Content Scripts</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Background Scripts</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>BrowserAction API</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>pageAction API</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Tabs API</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>web-ext</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>create-webextension</h1>
  </TitleSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Resource</h1>
    <ul>
      <li><a href='https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions'>MDN - Web Extensions docs</a></li>
      <li><a href='https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples'>Web Extensions examples</a></li>
    </ul>
  </ContentSlide>
));

export default slides;
