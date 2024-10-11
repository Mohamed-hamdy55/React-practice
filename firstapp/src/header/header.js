import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import MyLink from "../mylink/mylink";

export default class Header extends React.Component {
    constructor() {

        super();

        console.log("Hey from constructor");

        this.state = {
            name: "Hamdy",
            title: "Developer",
        };

        // if you want to call 'this.nameChange' and it is a function not variable
        // this.nameChange = this.nameChange.bind(this);
    }

    static getDerivedStateFromProps() {
        console.log("Hey from getDerivedStateFromProps");
        return 0;
    }

    nameChange = _ => {

        this.state.name === "Hamdy"
            ? this.setState({ name: "ahmed", title: "Graphic Designer" })
            : this.setState({ name: "Hamdy", title: "Developer" });

        let name = this.state.name;
        console.log(name);

        let testElment = document.querySelectorAll(".change");
        testElment.forEach(
            (e) => {
                e.style.color = "white";
                name === "Hamdy"
                    ? e.style.backgroundColor = "red"
                    : e.style.backgroundColor = "blue";
            }
        );

    };

    render() {
        console.log("Hey from render");
        return (
            <>
                {/* <MyLink title="Home" href="https://google.com"/>
                <h2> hello I am <span className="change"> == {this.state.name} == </span> </h2>
                <button type="button" onClick={this.nameChange}>
                    change Name
                </button>
                <h2> I am <span className="change"> == {this.state.title} == </span> </h2> */}

                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        );
    }

    componentDidMount() {
        console.log("Hey from componentDidMount");
    }

    componentDidUpdate() {
        console.log("Hey from componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Hey from componentWillUnmount");
    }
}

