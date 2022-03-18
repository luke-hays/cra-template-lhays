import styled from '@emotion/styled';

const App = (): JSX.Element => {
  const Header = styled('div')({
    width: '100%',
    height: '100px',
    backgroundColor: 'black',
    margin: '0',
  });

  const Body = styled('div')({
    width: '100%',
    height: '200px',
    backgroundColor: 'white',
    margin: '0',
  });

  return (
    <div>
      <Header />
      <Body>Hello Typescript</Body>
    </div>
  );
};

export default App;
