import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
        this.state = { catergory: '' };
    }

    
    toggleCategories() {
        let catergory = '';
        switch (this.state.activeTab) {
            default: {
                catergory = 'JavaScript';
            } break;
            case 1: {
                catergory = 'React';
            } break;
            case 2: {
                catergory = 'C#';
            } break;
            case 3: {
                catergory = 'Python;'
            }
        }
        // this.setState({ category: catergory });
    }
    


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                <h2>Completed {this.state.catergory} Projects</h2>
                                <h2>Upcoming {this.state.catergory} Projects</h2>
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>

        )
    }
}