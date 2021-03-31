import * as React from 'react';
import './Contact.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Contact extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="contact">
            <div>
                <h1>Contact</h1>
                <div className="grid-container">
                    <FontAwesomeIcon className="icon" icon="envelope"/>
                    <div className="contact-data">nicolecgager@gmail.com</div>

                    <FontAwesomeIcon className="icon" icon="mobile-alt"/>
                    <div className="contact-data">603 204 3293</div>

                    <FontAwesomeIcon className="icon" icon="map-marked-alt"/>
                    <div className="contact-data">Manchester, NH</div>

                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']}/>
                    <div className="contact-data">www.linkedin.com/in/nicole-gager</div>
                </div>
            </div>

        </div>;
    }
}

export default Contact;
