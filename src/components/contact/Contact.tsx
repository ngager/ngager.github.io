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
                    <div className="contact-data">
                        <a href="mailto:nicolecgager@gmail.com">nicolecgager@gmail.com</a>
                    </div>

                    <FontAwesomeIcon className="icon" icon="mobile-alt"/>
                    <div className="contact-data">
                        <a href="tel:+6032043293">603-204-3293</a>
                    </div>

                    <FontAwesomeIcon className="icon" icon="map-marker-alt"/>
                    <div className="contact-data">Manchester, NH</div>

                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']}/>
                    <div className="contact-data">
                        <a href="https://www.linkedin.com/in/nicole-gager" target="_blank">www.linkedin.com/in/nicole-gager</a>
                    </div>
                </div>
            </div>

        </div>;
    }
}

export default Contact;
