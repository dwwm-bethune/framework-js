import React from 'react';
import Image from './Image';

class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { name: 'Fiorella', job: 'Dev Junior', image: 'https://randomuser.me/api/portraits/women/35.jpg' },
                { name: 'Marina', job: 'DG', image: 'https://randomuser.me/api/portraits/women/36.jpg' },
                { name: 'Matthieu', job: 'PDG', image: 'https://randomuser.me/api/portraits/men/37.jpg' },
            ],
            selectedIndex: null,
        }
    }

    handleClick = (index, event) => {
        console.log(index);
        console.log(event);
        this.setState({ selectedIndex: index });
    }

    render() {
        return (
            <ul className="people">
                {this.state.contacts.map((contact, index) =>
                    <li key={index} onClick={(e) => this.handleClick(index, e)}>
                        <p>{contact.name}</p>
                        <Image src={contact.image} />
                        {this.state.selectedIndex == index && <p>{contact.job}</p>}
                    </li>
                )}
            </ul>
        )
    }
}

export default People;
