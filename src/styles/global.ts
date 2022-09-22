import { globalCss } from ".";

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  
  '*': {
    margin: '0',
  },
  
  'html, body, #__next': {
    height: '100%',
  },
  
  body: {
    lineHeight: '1.5',
    backgroundColor: '$base-background',
    color: '$base-text',
    '-webkit-font-smoothing': 'antialiased',
    font: '400 1rem Roboto, sans-serif',
  },
  
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  
  'input, button, textarea, select': {
    font: 'inherit',
  },
  
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  
  '#__next': {
    isolation: 'isolate',
  },

  'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  'input[type="number"]': {
    '-webkit-appearance': 'textfield',
  },
})