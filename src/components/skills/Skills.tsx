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
                    <div>Bootstrap</div>
                    <div>Angular Material</div>

                </div>
            </div>

        </div>;
    }
}

export default Skills;
