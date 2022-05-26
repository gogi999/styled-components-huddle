import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { Container } from "./components/styles/Container.styled";
import content from './content';

const theme = {
  colors: {
    header: '#32baa5',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px'
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
