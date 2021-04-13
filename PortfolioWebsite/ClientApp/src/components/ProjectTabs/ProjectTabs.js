import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProjectCard from '../projectCard'
import './ProjectTabs.css';


class ProjectTabs extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }
    render() {
        return (
            <Tabs selectedIndex={this.state.tabIndex}
                onSelect={tabIndex => this.setState({ tabIndex })} >
                <TabList>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                    <Tab>Python</Tab>
                </TabList>


                {/* Project Cards take title, subtitle, text, github, and liveDemo(optional) props */}
                <TabPanel>
                    <h2>Completed Javascript Projects</h2>
                    <br />
                    <h2>Upcoming Javascript Projects</h2>
                    <ProjectCard title='Pomodoro Timer'
                        subtitle='JavaScript'
                        text='Demonstration of basic JavaScript functionality in a personally used tool'
                        github='#' />
                </TabPanel>

                <TabPanel>
                    <h2>Completed React Projects</h2>
                        <ProjectCard title='Portfolio Website'
                            subtitle='React and JavaScript'
                            text='Demonstration of dynamic design, JavaScript, and mobile compatibility'
                            github='https://github.com/dankfrederick/PortfolioWebsite'
                            liveDemo='https://www.danfrederick.me/' />
                </TabPanel>

                <TabPanel>
                    <h2>Completed C# Projects</h2>
                    <br />
                    <h2>Upcoming C# Projects</h2>
                    <ProjectCard title='Class Feedback'
                        subtitle='Xamarin and C#'
                        text='Demonstration a cross-platform application in Xamarin'
                        github='https://github.com/dankfrederick/RT-class-feedback' />
                </TabPanel>


                <TabPanel>
                    <h2>Completed Python Projects</h2>
                        <ProjectCard title='Algorithms Practice'
                            subtitle='Python'
                            text='Practice with Data Structures and Algorithms'
                            github='https://github.com/dankfrederick/algorithms' />
                </TabPanel>
            </Tabs>
        );
    }
}

export default ProjectTabs;