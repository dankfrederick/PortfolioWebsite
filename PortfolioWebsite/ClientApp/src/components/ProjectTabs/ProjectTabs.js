import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
                <TabPanel>Completed Javascript Projects</TabPanel>
                <TabPanel>Completed React Projects</TabPanel>
                <TabPanel>Completed C# Projects</TabPanel>
                <TabPanel>Completed Python Projects</TabPanel>
            </Tabs>
        );
    }
}

export default ProjectTabs;