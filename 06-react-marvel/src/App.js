import DC from './DC';
import Marvel from './Marvel';

function App() {
  return (
    <div className="container">
      <Marvel name="Tony Stark"
        hero="Iron Man"
        avatar="tony-stark.jpg"
        avatar-hero="iron-man.jpg" />
      <DC name="Eddy Brock"
        hero="Venom"
        avatar="tony-stark.jpg"
        avatar-hero="iron-man.jpg" />
    </div>
  );
}

export default App;
