import * as React from 'react';
import './Skills.scss';

class Skills extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="skills">
            <div>
                <h1>Technical Skills</h1>
                <div>
                    <div>AngularJS/Angular Framework</div>
                    <div>Typescript</div>
                    <div>HTML 5</div>
                    <div>CSS</div>
                    <div>Responsive Design</div>
                    <div>Bootstrap</div>
                    <div>Angular Material</div>
                    <div>Unit Testing</div>
                    <div>Google Analytics</div>
                    <div>Agile Methodology</div>
                    <div>Git</div>
                </div>

                <h1>Soft Skills</h1>
                <div>
                    <div>Team Oriented</div>
                    <div>Time Management</div>
                    <div>Effective Communicator</div>
                </div>
            </div>

        </div>;
    }
}

export default Skills;
