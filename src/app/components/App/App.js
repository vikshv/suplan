import React from 'react';
import PropTypes from 'prop-types';

import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { 
    Container,
    Row,
    Col
} from 'reactstrap';

// import {
//     Form,
//     Button
// } from 'reactstrap';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar 
                    color="dark"
                    dark={true}
                    expand="md"
                >
                    <Container>
                        <NavbarToggler />
                        <NavbarBrand 
                            href="/"
                        >
                            suplan
                        </NavbarBrand>
                        <Collapse
                            navbar={true}
                        >
                            <Nav 
                                className="ml-auto"
                                navbar={true}
                            >
                                <NavItem>
                                    <NavLink href="/about">О проекте</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://blog.suplan.ru">Блог</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://help.suplan.ru">Поддержка</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled={true}>|</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Вход</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Регистрация</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            Hello
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
