import { customTheme } from 'pds-dev-kit-web';
import styled, { ThemeProvider } from 'styled-components';
import PDSconverter from '../components/PDSconverter';
import theme from './theme';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <S_App>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/converter" element={<PDSconverter />} />
        </Routes>
      </S_App>
    </ThemeProvider>
  );
}

const S_App = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
