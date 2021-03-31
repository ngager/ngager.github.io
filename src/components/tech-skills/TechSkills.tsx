import * as React from 'react';
import './TechSkills.scss';

class TechSkills extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="tech-skills">
            <div>
                <h1>Technical Skills</h1>
                <div className="skills-list">
                    <div>Agile Methodology</div>
                    <div>AngularJS/Angular Framework</div>
                    <div>Angular Material</div>
                    <div>Bootstrap/NgBootstrap</div>
                    <div>CSS/SCSS</div>
                    <div>C#/Razor</div>
                    <div>Google Analytics</div>
                    <div>Git</div>
                    <div>HTML5</div>
                    <div>JavaScript/TypeScript</div>
                    <div>Magento/PHP</div>
                    <div>Responsive Design</div>
                    <div>Unit Testing</div>
                </div>
            </div>
        </div>;
    }
}

export default TechSkills;
