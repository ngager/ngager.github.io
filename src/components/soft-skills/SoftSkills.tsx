import * as React from 'react';
import './SoftSkills.scss';

class SoftSkills extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="soft-skills">
            <div>
                <h1>Soft Skills</h1>
                <div className="skills-list">
                    <div>Detail Oriented</div>
                    <div>Team Player</div>
                    <div>Time Management</div>
                    <div>Effective Communicator</div>
                </div>
            </div>

        </div>;
    }
}

export default SoftSkills;
