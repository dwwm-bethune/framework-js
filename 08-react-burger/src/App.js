function App() {
  return (
    <div className="container">
      <div className="burger flex">
        <img src="https://foodish-api.herokuapp.com/images/burger/burger42.jpg" alt="Normal Burger" />
        <div className="flex text">
          <div>
            <h2>Normal Burger</h2>
            <p>Un bon burger</p>
            <a className="btn" href="#">Voir</a>
          </div>
          <div className="price">8 €</div>
        </div>
      </div>
      <div className="burger flex">
        <img src="https://foodish-api.herokuapp.com/images/burger/burger19.jpg" alt="King Burger" />
        <div className="flex text">
          <div>
            <h2>King Burger</h2>
            <p>Un burger de roi</p>
            <a className="btn" href="#">Voir</a>
          </div>
          <div className="price">10 €</div>
        </div>
      </div>
      <div className="burger flex">
        <img src="https://foodish-api.herokuapp.com/images/burger/burger18.jpg" alt="Double Burger" />
        <div className="flex text">
          <div>
            <h2>Double Burger</h2>
            <p>Un burger pour les grandes faims</p>
            <a className="btn" href="#">Voir</a>
          </div>
          <div className="price">12 €</div>
        </div>
      </div>
    </div>
  );
}

export default App;
