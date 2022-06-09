import axios from 'axios';
import React from 'react';
import Loader from './Loader';

class Sentences extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sentences: [], loading: true, selectedSentence: null };
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
            </div>
        );
    }
}

export default Sentences;
