import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/js/global';
import { lightTheme } from './assets/styles/js/theme';

import { Pokedex } from './pages';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Pokedex />
      </>
    </ThemeProvider>
  );
}


export default App;