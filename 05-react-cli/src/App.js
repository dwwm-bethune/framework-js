import './App.css';
import Button from './Button';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <Button>Envoyer</Button>
      <Button>Commander</Button>
      <Image src="img/logo.svg" />
    </div>
  );
}

export default App;
