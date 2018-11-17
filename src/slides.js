import React from 'react'
import { TitleSlide, ContentSlide, Step, Code } from 'react-presents'
import './App.css';
import manifestCode from './snippets/manifest.json';

const slides = [];

slides.push(() => (
  <TitleSlide>
    <h1>Building Web Extensions</h1>
    <h2>Mozilla Perú</h2>
    <h2>
      <a href='https://github.com/mozillaperu'>
        <i className='fa fa-github' />
      </a>
      <a href='https://twitter.com/mozillaperu'>
        <i className='fa fa-twitter' />
      </a>
    </h2>
  </TitleSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Who I am ?</h1>
    <Step index={1}>
      <h2>
        César Carruitero
        <a href='https://github.com/ccarruitero'>
          <i className='fa fa-github'/>
          ccarruitero
        </a>
      </h2>
    </Step>
    <ul>
      <Step index={2}>
        <li>Software developer for ~8 years </li>
      </Step>
      <Step index={3}>
        <li>Mozillian, Mozilla volunteer </li>
      </Step>
      <Step index={4}>
        <li>...</li>
      </Step>
    </ul>
  </ContentSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Mozilla</h1>
    <img
      className='full-img'
      alt=''
      src='https://www.mozilla.org/media/img/contribute/studentambassadors/hero.513535501a1e.jpg'
    />
    <p>
      'https://www.mozilla.org/media/img/contribute/studentambassadors/hero.513535501a1e.jpg'
    </p>
  </ContentSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Web Extensions</h1>
    <ul>
      <Step index={1}>
        <h2>Addons</h2>
      </Step>
      <Step index={2}>
        <li>Personalize your browser experience</li>
      </Step>
      <Step index={3}>
        <li>Extend browser functionality</li>
      </Step>
      <Step index={4}>
        <li>Cross browser compatibility</li>
      </Step>
      <Step index={5}>
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
    <p>'https://mdn.mozillademos.org/files/13669/webextension-anatomy.png'</p>
  </ContentSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>manifest.json</h1>
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
  <ContentSlide>
    <h2>Content Scripts</h2>
    <img
      className='page-img'
      src='http://localhost:5000/borderify.png'
      alt=''
    />
  </ContentSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Javascript APIs</h1>
    <Step index={1}>
    <h2>for WebExtensions</h2>
    <img
      className='page-img'
      src='http://localhost:5000/javascript-apis.png'
      alt=''
    />
    </Step>
  </TitleSlide>
));
slides.push(() => (
  <ContentSlide>
    <h1>
      Javascript APIs for WebExtensions
    </h1>
    <ul>
    <Step index={0}>
      <li>some require request permissions</li>
    </Step>
    <Step index={1}>
      <li>some return Promises</li>
    </Step>
    </ul>
  </ContentSlide>
));

const browserApi = "a button in the browser's toolbar";
slides.push(() => (
  <TitleSlide>
    <h1>BrowserAction API</h1>
    <Step index={1}>
    <li>{browserApi}</li>
    </Step>
    <Step index={2}>
    <li>properties defined in manifest.json</li>
    </Step>
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
    <h1>Background Scripts</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Content Scripts</h1>
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
  <TitleSlide>
    <h1>webextension-polyfill</h1>
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
