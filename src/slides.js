import React from 'react'
import { TitleSlide, ContentSlide, Step, Code } from 'react-presents'
import './App.css';
import manifestCode from './snippets/manifest.json';
import borderifyImg from './images/borderify.png';
import javascriptApisImg from './images/javascript-apis.png';

const slides = [];
const ghUrl = 'https://github.com/mozillaperu'
const twUrl = 'https://twitter.com/mozillaperu'

slides.push(() => (
  <TitleSlide>
    <h1>Building Web Extensions</h1>
    <h2>Mozilla Perú</h2>
    <h2>
      <a href={ghUrl}>
        <i className='fa fa-github' />
      </a>
      <a href={twUrl}>
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

const mozillaImg = 'https://www.mozilla.org/media/img/contribute/studentambassadors/hero.513535501a1e.jpg';
slides.push(() => (
  <ContentSlide>
    <h1>Mozilla</h1>
    <img
      className='full-img'
      alt=''
      src={mozillaImg}
    />
    <p>
      {mozillaImg}
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

const anatomyImg = 'https://mdn.mozillademos.org/files/13669/webextension-anatomy.png';
slides.push(() => (
  <ContentSlide>
    <h1>Anatomy of Web Extensions</h1>
    <img
      className='page-img'
      alt=''
      src={anatomyImg}
    />
    <p>{anatomyImg}</p>
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
      src={borderifyImg}
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
      src={javascriptApisImg}
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

const browserAction = "a button in the browser's toolbar";
slides.push(() => (
  <TitleSlide>
    <h1>BrowserAction API</h1>
    <Step index={1}>
    <li>{browserAction}</li>
    </Step>
    <Step index={2}>
    <li>most properties defined in manifest.json</li>
    </Step>
    <Step index={3}>
    <li>you can listen for clicks on the icon</li>
    </Step>
  </TitleSlide>
));

const pageAction = "a clickable icon inside the browser's address bar";
slides.push(() => (
  <TitleSlide>
    <h1>pageAction API</h1>
    <Step index={1}>
    <li>{pageAction}</li>
    <img
      className='page-img'
      alt=''
      src='https://mdn.mozillademos.org/files/12960/page-action.png'
    />
    </Step>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Tabs API</h1>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>notifications API</h1>
  </TitleSlide>
));

const alarms = "like setTimeout() and setInterval(), but for background pages";
slides.push(() => (
  <TitleSlide>
    <h1>alarms API</h1>
    <Step index={1}>
      <p>{alarms}</p>
    </Step>
  </TitleSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Background Scripts</h1>
    <li>long-running logic</li>
  </TitleSlide>
));

const tooling = 'some tooling'.toLocaleUpperCase();
slides.push(() => (
  <TitleSlide>
    <h1>{tooling}</h1>
  </TitleSlide>
));

const webExtRepo = 'https://github.com/mozilla/web-ext';
slides.push(() => (
  <TitleSlide>
    <h1>web-ext</h1>
    <h2>
      <a href={webExtRepo}>
        <i className='fa fa-github' />
        {webExtRepo}
      </a>
    </h2>
  </TitleSlide>
));

const createRepo = 'https://github.com/rpl/create-webextension';
slides.push(() => (
  <TitleSlide>
    <h1>create-webextension</h1>
    <h2>
      <a href={createRepo}>
        <i className='fa fa-github' />
        {createRepo}
      </a>
    </h2>
  </TitleSlide>
));

const polyfillRepo = 'https://github.com/mozilla/webextension-polyfill';
slides.push(() => (
  <TitleSlide>
    <h1>webextension-polyfill</h1>
    <h2>
      <a href={polyfillRepo}>
        <i className='fa fa-github' />
        {polyfillRepo}
      </a>
    </h2>
  </TitleSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Resources</h1>
    <ul>
      <li><a href='https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions'>MDN - Web Extensions docs</a></li>
      <li><a href='https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples'>Web Extensions examples</a></li>
    </ul>
  </ContentSlide>
));

slides.push(() => (
  <TitleSlide>
    <h1>Thanks!</h1>
    <h2>
      <a href={ghUrl}>
        <i className='fa fa-github' />
      </a>
      <a href={twUrl}>
        <i className='fa fa-twitter' />
      </a>
      @mozillaperu
    </h2>
  </TitleSlide>
));

export default slides;
