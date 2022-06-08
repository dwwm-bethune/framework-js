import React from 'react';
import axios from 'axios';
import Loader from './Loader';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        }
    }

    componentDidMount() {
        // Ici, on peut faire une requête AJAX sur une API pour récupérer
        // des données
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            // Le .then se fait quand les données sont arrivées
            console.log(response.data.results);
            this.setState({ users: response.data.results, loading: false });
        });
    }

    render() {
        if (this.state.loading) {
            // On crée un composant Loader avec un svg (attribut fill pour la couleur) ou une image en gif
            return <Loader />;
        }

        return (
            <div>
                <ul>
                    {this.state.users.map((user, index) =>
                        <li key={index}>
                            {user.email}
                            <img src={user.picture.large} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Users;
