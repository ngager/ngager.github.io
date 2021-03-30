import * as React from 'react';
import './Education.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Education extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="education">
            <div>
                <h1>Education</h1>
                <div>
                    <div>University of New Hampshire</div>
                    <div>BS in Computer Science</div>
                    <div>September 2011 - May 2015</div>
                    <div>Durham, NH</div>
                </div>
            </div>

        </div>;
    }
}

export default Education;
