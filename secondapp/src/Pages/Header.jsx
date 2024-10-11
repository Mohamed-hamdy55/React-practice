import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import {Link } from 'react-router-dom/cjs/react-router-dom.min';
import changeLanguage from '../Redux/actions/language';


export default function Header() {
    const language = useSelector((state)=>state.language.lang);
    const dispatchFunc = useDispatch();

    const handleChnageLanguage = ()=>{
      (language === 'en')? dispatchFunc(changeLanguage('ar')): dispatchFunc(changeLanguage('en'));
    }
    return (
      <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Link to="/" >Home</Link>
                  <Link to="/contact" className="mx-3">Contact Us</Link>
                  <Link to="/about" className="mx-3">About</Link>
                  <Link to="/products" >Products</Link>
                  <h3 className="mx-3">{language}</h3>
                  <button className='btn btn-primary' type='button' onClick={()=>{handleChnageLanguage()}}>
                    Change Language
                  </button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
    );
  }