import * as React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="header">
            <span>header</span>
        </div>;
    }
}

export default Header;
