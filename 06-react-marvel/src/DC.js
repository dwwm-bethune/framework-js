import React from 'react';

class DC extends React.Component {
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
                    <h2>Je suis {this.props.hero.hero}</h2>
                    <img className="avatar" src={'img/' + this.props.hero.avatarHero} />
                    <button className="btn btn-dc" onClick={this.change}>Cacher identité secrète</button>
                </div>
            );
        }

        return (
            <div className="hero">
                <h2>Je suis {this.props.hero.name}</h2>
                <img className="avatar" src={'img/' + this.props.hero.avatar} />
                <button className="btn btn-dc" onClick={this.change}>Révéler identité secrète</button>
            </div>
        );
    }
}

export default DC;
