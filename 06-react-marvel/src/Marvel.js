import React from 'react';

class Marvel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        };
    }

    change = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        if (!this.state.hidden) {
            return (
                <div className="hero">
                    <h2>Je suis {this.props.hero}</h2>
                    <img className="avatar" src={'img/' + this.props['avatar-hero']} />
                    <button className="btn btn-marvel" onClick={this.change}>Cacher identité secrète</button>
                </div>
            );
        }

        return (
            <div className="hero">
                <h2>Je suis {this.props.name}</h2>
                <img className="avatar" src={'img/' + this.props.avatar} />
                <button className="btn btn-marvel" onClick={this.change}>Révéler identité secrète</button>
            </div>
        );
    }
}

export default Marvel;
