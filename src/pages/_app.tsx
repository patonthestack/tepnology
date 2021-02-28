import theme from 'styles/theme';
import Router from 'next/router';
import { useEffect } from 'react';

// Analytics
// Router.events.on('routeChangeComplete', () => {
//   firebase.analytics().logEvent<string>('screen_view', {
//     firstName: 'Pat',
//   });
//   // Fathom.trackPageview()
// });

const App = ({ Component, pageProps, children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      //   includedDomains: ['gradgreenhouse.com']
      // })
    }
  }, []);

  return <Component {...pageProps}>{children}</Component>;
};

export default App;
