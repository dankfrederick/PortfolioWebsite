import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <i className="fa fa-cogs" aria-hidden="true" />
            <img src="images/Logo_3.png" alt="logo" />
            <div className="banner-block">
                <h3><strong>Full Stack Software Engineer</strong></h3>
                <h4>JavaScript | C# | React | Python</h4>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/dan-k-frederick/" rel="noopener noreferrer"  target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    </a>
                    <a href="https://github.com/dankfrederick" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                </div>
            </div>
      </div>
    );
  }
}
