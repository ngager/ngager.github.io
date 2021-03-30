import * as React from 'react';
import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="header">
            <img className="profile-image"/>
            <div className="flex column">
                <h1>Nicole Gager</h1>
                <h3>Software Developer</h3>
            </div>
        </div>;
    }
}

export default Header;
