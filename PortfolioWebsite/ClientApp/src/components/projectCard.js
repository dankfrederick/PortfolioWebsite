import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        let demo = null;

        if (this.props.liveDemo != null) {
            demo = <Card.Link href={this.props.liveDemo} target='_blank'>Live Demo</Card.Link>
        }

        return (

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Card.Link href={this.props.github} target='_blank'>GitHub</Card.Link>
                    {demo}
            </Card.Body>
            </Card>
        );
    }
};

export default ProjectCard;