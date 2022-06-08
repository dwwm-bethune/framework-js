import './App.css';
import Button from './Button';
import Image from './Image';
import People from './People';

function App() {
  return (
    <div className="App">
      <Button>Envoyer</Button>
      <Button>Commander</Button>
      <People />
      <Image src="img/logo.svg" />
    </div>
  );
}

export default App;
