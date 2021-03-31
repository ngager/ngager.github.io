import * as React from 'react';
import './Experience.scss';

class Experience extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="experience">
            <h1>Experience</h1>
            <div className="experience-detail">
                <div className="title">Senior Software Engineer</div>
                <div className="company">Emerson Ecologics | Manchester NH</div>
                <div className="date-range">March 2018 - Present</div>
                <div className="responsibilities-list">
                    <ul>
                        <li>Designed and implemented numerous front-end features for Emerson's eCommerce health dispensary, Wellevate, to target practitioners and their patients</li>
                        <li>Rapidly integrated our online dispensary with VSee, a virtual conferencing platform, to enable telehealth communication for practitioners and their patients at the beginning of Covid</li>
                        <li>Built out a public REST API in C# that allowed EHR systems to integrate with Wellevate and pull practitioner/patient information</li>
                        <li>Collaborated with product owners and UX to work out the logistics of new features as a front-end SME in preparation for story writing</li>
                        <li>Leveraged Karma and Jasmine to write robust, single responsibility blocks of code</li>
                        <li>Conducted interviews for prospective new hires</li>
                    </ul>
                </div>
            </div>

            <div className="experience-detail">
                <div className="title">Senior UI Developer</div>
                <div className="company">C Squared Systems | Auburn NH</div>
                <div className="date-range">January 2015 - March 2018</div>
                <div className="responsibilities-list">
                    <ul>
                        <li>Migrated a legacy codebase from AngularJS to Angular 4</li>
                        <li>Increased front-end efficiency by breaking down large JSON response data into blocks from the application’s REST API</li>
                        <li>Created and managed UI standards in Confluence and reviewed front-end pull requests submitted by junior developers</li>
                        <li>Created UI wireframes for application feature requests using NinjaMock</li>
                        <li>Built Angular 4 services to connect with the application’s REST API in order to provide a means for component communication and component data retrieval </li>
                        <li>Harnessed RxJS for asynchronous and event-based computations, such as orchestrating the loading of data into UI grids upon successful callbacks from the API</li>
                        <li>Maintained cross browser and platform compatibility while adhering to responsive web design with CSS templates</li>
                        <li>Developed and maintained an in-house ticketing system integrated with SitePortal©, a networking management application, to generate automatic tickets upon triggered device alarms</li>
                        <li>Deployed a new infrastructure for dispatching notification phone calls using Twilio’s REST API</li>
                        <li>Participated as a founding member of the company’s social committee and created an accompanying website with WordPress</li>
                        <li>Participated in daily scrum meetings, helping to identify blocking issues, prioritize tasks, and maintain a level focus within the team</li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

export default Experience;
