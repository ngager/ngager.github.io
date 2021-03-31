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
                <div className="skills-list">
                    <div>Agile Methodology</div>
                    <div>AngularJS/Angular Framework</div>
                    <div>Angular Material</div>
                    <div>Bootstrap</div>
                    <div>CSS</div>
                    <div>Google Analytics</div>
                    <div>Git</div>
                    <div>HTML5</div>
                    <div>Responsive Design</div>
                    <div>Typescript</div>
                    <div>Unit Testing</div>
                </div>
                <h1 className="pt10px">Soft Skills</h1>
                <div className="skills-list">
                    <div>Team Oriented</div>
                    <div>Time Management</div>
                    <div>Effective Communicator</div>
                </div>
            </div>

        </div>;
    }
}

export default Skills;
