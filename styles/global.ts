import { randomColor } from 'helpers/index';

export default {
  styles: {
    global: {
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      html: { scrollBehavior: 'smooth' },
      div: { whiteSpace: 'pre-line' },
      '::selection': { background: '#e9d8fd' },
      '::-moz-selection': { background: '#e9d8fd' },
      '.random-color-border-top': { borderTop: `2px solid ${randomColor()}` },
      '.random-color-border-bottom': {
        borderBottom: `2px solid ${randomColor()}`,
      },
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
      '.editor': { border: '1px solid #d7d7d7' },
      '.editor .rdw-editor-main': { padding: '0 20px 10px' },
      '.jobDescription': { whiteSpace: 'pre-wrap' },
      '.jobDescription ul': {
        margin: '0 30px',
        padding: 0,
        whiteSpace: 'normal',
      },
      '.jobDescription li': {
        margin: 0,
        padding: 0,
        whiteSpace: 'normal',
      },
      '.jobDescription p': {
        margin: 0,
        padding: 0,
        whiteSpace: 'normal',
      },
      '.embed-container': {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
      },
      '.embed-container iframe, .embed-container object, .embed-container embed': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      '.codeBlock span': {
        whiteSpace: 'pre-wrap!important',
      },
      'span .boolean': {
        color: '#a48de0!important',
      },
      '.date-picker': {
        width: '100%!important',
        outline: 0,
        position: 'relative',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        msAppearance: 'none',
        appearance: 'none',
        WebkitTransition: 'all 0.2s',
        transition: 'all 0.2s',
        fontSize: '16px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        height: '2.5rem',
        borderRadius: '0.375rem',
        border: '1px solid',
        borderColor: 'inherit',
        background: 'inherit',
      },
      '.selected': {
        color: '#000!important',
        borderBottom: '1px purple dotted',
        width: '100%',
        fontWeight: 'bold',
      },

      // 'a:link': {
      //   color: 'black'
      // },
      // 'a:visited': {
      //   color: 'black'
      // },
      // 'a:hover': {
      //   color: 'black'
      // },
      // 'a:active': {
      //   color: 'black'
      // }
    },
  },
};
