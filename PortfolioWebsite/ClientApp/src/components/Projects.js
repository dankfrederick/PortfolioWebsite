import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    
    toggleCategories() {
        switch (this.state.activeTab) {
            default: {
                return (
                    <div>
                        <h2>Completed JavaScript Projects</h2>

                        <h2>Upcoming JavaScript Projects</h2>
                    </div>
                )
            } break;
            case 1: {
                return (
                    <div>
                        <h2>Completed React Projects</h2>

                        <h2>Upcoming React Projects</h2>
                    </div>
                )
            } break;
            case 2: {
                return (
                    <div>
                        <h2>Completed C# Projects</h2>

                        <h2>Upcoming C# Projects</h2>
                    </div>
                )
            } break;
            case 3: {
                return (
                    <div>
                        <h2>Completed Python Projects</h2>

                        <h2>Upcoming Python Projects</h2>
                    </div>
                )
            }
    }
    
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
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>

        )
    }
}