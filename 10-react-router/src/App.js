import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/a-propos">A propos</Link></li>
        <li><Link to="/bonjour/fiorella">Fiorella</Link></li>
        <li><Link to="/bonjour/toto">Toto</Link></li>
      </ul>
      
      <Outlet />
    </div>
  );
}
