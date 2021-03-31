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
                <div className="company">Emerson Ecologics <span className="company-location">Manchester NH</span></div>
                <div className="date-range">March 2018 - Present</div>
                <div className="responsibilities-list">
                    <ul>
                        <li>
                            Designed and implemented numerous front-end initiatives and features for Emerson's eCommerce health dispensary, Wellevate&#174;.
                        </li>
                        <li>
                            Rapidly worked to integrate Wellevate&#174; with VSee, a virtual conferencing platform, to enable telehealth
                            communication between practitioners and their patients at the start of the Covid pandemic. This was a major
                            win as it expanded the company into a new sector of the market and demonstrated the ability to pivot quickly
                            to client needs.
                        </li>
                        <li>
                            Built out a public REST API in C# that allowed various EHR systems to integrate with Wellevate&#174; and pull/update
                            practitioner/patient information as needed.
                        </li>
                        <li>
                            Collaborated with product owners and UX to hash out new feature ideas and provide high level t-shirt sizing as a front-end SME.
                            Provided creative options for breaking down large initiatives into more detestable pieces in an effort to release features to
                            production faster and avoid waterfall development.
                        </li>
                        <li>
                            Frequently identified areas where reusable components could be created and leveraged to reduce code duplication and
                            increase ease of maintenance. Socialized front-end best practices like "smart" vs "dumb/presentational" components to
                            isolate UI from business logic and encourage single responsibility code.
                        </li>
                        <li>
                            Collaborated within a UI guild, comprised of developers and UX designers, to conjure the vision of the front-end UI in terms of
                            reusable components, tackling app-wide CSS tech debt, reducing the number of variant styles, and bridge the gap between
                            design and implementation.
                        </li>
                        <li>
                            Created RESTful endpoints within Magento to expose resources for the front-end application to consume.
                        </li>
                        <li>
                            Leveraged Karma and Jasmine to write robust, single responsibility blocks of code.
                        </li>
                        <li>
                            Leveraged Browserstack for app and cross-browser testing.
                        </li>
                        <li>
                            Conducted interviews for prospective new developers.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="experience-detail">
                <div className="title">Senior UI Developer</div>
                <div className="company">C Squared Systems <span className="company-location">Auburn NH</span></div>
                <div className="date-range">January 2015 - March 2018</div>
                <div className="responsibilities-list">
                    <ul>
                        <li>
                            Migrated a legacy codebase from AngularJS to Angular 4.
                        </li>
                        <li>
                            Increased front-end efficiency by breaking down large JSON response data into blocks from the application’s REST API.
                        </li>
                        <li>
                            Created and managed UI standards in Confluence and reviewed front-end pull requests submitted by junior developers.
                        </li>
                        <li>
                            Created UI wireframes for application feature requests using NinjaMock.
                        </li>
                        <li>
                            Built Angular services to connect with the application’s REST API to provide a means for component communication and component data retrieval.
                        </li>
                        <li>
                            Harnessed RxJS for asynchronous and event-based computations, such as orchestrating the loading of data into UI grids
                            upon successful callbacks from the API.
                        </li>
                        <li>
                            Maintained cross browser and platform compatibility while adhering to responsive web design with CSS templates.
                        </li>
                        <li>
                            Developed and maintained an in-house ticketing system integrated with SitePortal©, a networking management application,
                            to generate automatic tickets upon triggered device alarms.
                        </li>
                        <li>
                            Deployed a new infrastructure for dispatching notification phone calls using Twilio’s REST API.
                        </li>
                        <li>
                            Participated as a founding member of the company’s social committee and created an accompanying website with WordPress.
                        </li>
                        <li>
                            Participated in daily scrum meetings, helping to identify blocking issues, prioritize tasks, and focus the team.
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

export default Experience;
