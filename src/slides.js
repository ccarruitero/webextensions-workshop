import React from 'react'
import { TitleSlide, ContentSlide } from 'react-presents'

const slides = [];

slides.push(() => (
  <TitleSlide>
    <h1>Building Web Extensions</h1>
  </TitleSlide>
));

slides.push(() => (
  <ContentSlide>
    <h1>Anatomy of Web Extensions</h1>
  </ContentSlide>
));

export default slides;
