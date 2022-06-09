import axios from 'axios';
import React from 'react';
import Loader from './Loader';

class Sentences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentences: [],
            loading: true,
            selectedSentence: null,
            newSentence: '',
            newAuthor: '',
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/sentences').then(response => {
            console.log(response.data);
            this.setState({ sentences: response.data, loading: false });
        });
    }

    getSentence = (id) => {
        this.setState({ loading: true });
        // alert(id);
        axios.get('http://localhost:3001/sentences/' + id).then(response => {
            console.log(response.data);
            // On peut "ralentir" l'API pour afficher le loader
            setTimeout(() => this.setState({ selectedSentence: response.data, loading: false }), 200);
        });
        // axios.get(`http://localhost:3001/sentences/${id}`);
    }

    handleChange = (event) => {
        // event.target représente le input dans lequel on a saisi un truc
        console.log(event.target.name);
        console.log(event.target.value);
        // [event.target.name]: devient ['newSentence']: devient newSentence:
        this.setState({ [event.target.name]: event.target.value });
    }

    addSentence = () => {
        // Requête AJAX pour insérer la phrase dans l'API
        axios.post('http://localhost:3001/sentences', {
            sentence: this.state.newSentence,
            author: this.state.newAuthor
        }).then(response => {
            console.log(response.data);
            this.setState({ newSentence: '', newAuthor: '' });

            // Mettre à jour la liste des phrases
            axios.get('http://localhost:3001/sentences').then(response => {
                console.log(response.data);
                this.setState({ sentences: response.data, loading: false });
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <Loader />;
        }

        let selected = null;
        if (this.state.selectedSentence) {
            selected = <h1>{this.state.selectedSentence.sentence}</h1>;
        }

        return (
            <div>
                {selected}
                <div className="row my-5">
                    {this.state.sentences.map(sentence =>
                        <div className="col-lg-3" key={sentence.id}>
                            <div className="card shadow" onClick={ () => this.getSentence(sentence.id) }>
                                <div className="card-body">
                                    {sentence.sentence} par {sentence.author}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-25 mx-auto">
                    <input type="text" value={this.state.newSentence} onChange={this.handleChange} name="newSentence" className="form-control mb-4" placeholder="Phrase" />
                    <input type="text" value={this.state.newAuthor} onChange={this.handleChange} name="newAuthor" className="form-control mb-4" placeholder="Auteur" />
                    <button className="btn btn-primary" onClick={this.addSentence} disabled={!this.state.newSentence || !this.state.newAuthor}>Ajouter</button>
                </div>
                Aperçu: {this.state.newSentence} par {this.state.newAuthor}
            </div>
        );
    }
}

export default Sentences;
