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
                <TabPanel><h2>Completed Javascript Projects</h2>

                </TabPanel>
                <TabPanel><h2>Completed React Projects</h2></TabPanel>
                <TabPanel><h2>Completed C# Projects</h2></TabPanel>
                <TabPanel><h2>Completed Python Projects</h2></TabPanel>
            </Tabs>
        );
    }
}

export default ProjectTabs;