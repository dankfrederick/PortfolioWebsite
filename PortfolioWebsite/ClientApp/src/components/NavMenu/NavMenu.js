import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/" className="text-light"><strong>DanFrederick.me</strong></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                </NavItem>
                            {/* TODO: Add show and hide for contact form, re-enable navigation */}
                            {/*<NavItem>
                  <NavLink tag={Link} className="text-light" to="#projects">Projects</NavLink>
                </NavItem>
                  <NavItem>
                   <NavLink tag={Link} className="text-light" to="#contact">Contact</NavLink>
                  </NavItem>*/}

              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
