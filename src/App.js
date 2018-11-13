import React from 'react';
import { Presentation, Slide } from 'react-presents';
import slides from './slides';

export default () => (
  <Presentation>
    { slides.map((component, index) => (
      <Slide
        component={component}
        key={index}
      />
    ))}
  </Presentation>
)
