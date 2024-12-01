import {css, Global, ThemeProvider} from '@emotion/react';
import Layout from './layout/Layout/Layout.tsx';
import {theme} from 'src/styles/theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          /* CSS Reset */
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html,
          body {
            height: 100%;
            font-size: 100%;
            font-family: Arial, sans-serif;
          }

          img {
            max-width: 100%;
            display: block;
          }

          ol,
          ul {
            list-style: none;
          }

          table {
            border-collapse: collapse;
          }
        `}
      />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
