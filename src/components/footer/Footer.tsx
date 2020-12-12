import * as React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="footer">
            <span>footer</span>
        </div>;
    }
}

export default Footer;
