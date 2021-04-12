import React, { Component } from 'react';
import ProjectTabs from './ProjectTabs/ProjectTabs';

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
                <h4>JavaScript | React | C# | Python</h4>

                {/* Social Media link icons */}
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

            <ProjectTabs />
      </div>
    );
  }
}
