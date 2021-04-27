import React, { Component } from 'react';
import ProjectTabs from './ProjectTabs/ProjectTabs';
import Footer from './Footer/Footer';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            {/* Banner Image */}
            <img src="images/Logo_3.png" alt="logo" />

            {/* Banner Block */}
            <div className="banner-block">
                <h3><strong>Full Stack Software Engineer</strong></h3>
                <h4>JavaScript | React | C# | Python | SQL</h4>

                {/* Social Media link icons */}
                <h5>Professional Links</h5>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/dan-k-frederick/" rel="noopener noreferrer"  target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    </a>
                    <a href="https://www.freecodecamp.org/danfrederick" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/dankfrederick" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                </div>
            </div>
            {/*Project Tabs and Cards for*/}
            <div id="projects">
                <h4><strong>Project Portfolio</strong></h4>
                <ProjectTabs />
            </div>

            {/*Contact Form*/}
            {/*TODO: Fix Bookmarking, not currently functional. React based issue? */}
            <div id="contact">

            </div>

            <Footer />
      </div>
    );
  }
}
