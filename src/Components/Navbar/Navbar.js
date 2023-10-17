import {Container, Nav, Navbar,NavDropdown, Button} from 'react-bootstrap';
import './Navbar.css'
import logo from '../../imgs/logo.png'
import whiteLogo from '../../imgs/white-logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Header() {

    const navs = [
        {
            title: 'Pages',
            items: [
                { name: 'About Us', href: '/pages/about' },
                { name: 'Our Team', href: '/pages/team' },
                { name: 'Faq\'s', href: '/pages/fax' },
                { name: 'Booking', href: '/pages/book' },
                { name: 'Error 404', href: '/pages/fourO4' },
                { name: 'Login/Register', href: '/pages/login' },
            ],
        },
        {
            title: 'Services',
            items: [
                { name: 'Service', href: 'services/service' },
                { name: 'Service Details', href: 'services/service-details' },
            ],
        },
        {
            title: 'Blogs',
            items: [
                { name: 'Blog', href: 'blogs/blog' },
                { name: 'Blog Details', href: 'blogs/blog-details' },
            ],
        },
    ];
    
    const navsDrop = navs.map((nav, idx) => {
        return (
            <NavDropdown title={nav.title} id="basic-nav-dropdown" className="custom-dropdown" key={idx}>
                {nav.items.map((item) => (
                    <Link key={item.name} to={item.href} data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabindex="0">
                        {item.name}
                    </Link>
                ))}
            </NavDropdown>
        );
    });
    
    const [isHeaderOpen, setIsHeaderOpen] = useState(true)

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    const [isSearchShow, setSearchShow] = useState(false)
    const toggleSearch = () => {
        setSearchShow(!isSearchShow)
        console.log(isSearchShow)
    }

    return (
        <Navbar expand="lg" className={`bg-gray-200 test`}>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
                <Nav.Link href="#home" className='phoneAndGlass d-none glas-min' onClick={toggleSearch}><i className="fa fa-search search"></i></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
                        return(
                            toggleHeader()
                        )
                    }}/>
                <Navbar.Collapse id={`basic-navbar-nav`} className={`${isHeaderOpen ? '' : 'closed'}`}>
                    <button className="close-button" onClick={() => {
                        return(
                            toggleHeader()
                        )
                    }}>
                        <i className="fa fa-close"></i>
                    </button>
                    <Navbar.Brand href="#home" className='d-none brand-menue'><img src={whiteLogo} alt='logo' style={{width:'120px'}}/></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to='/' data-rr-ui-event-key="#link padd" className="nav-link">Home</Link>
                        {navsDrop}
                        <Link to="/contact" data-rr-ui-event-key="#link padd" className="nav-link">Contact Us</Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link href="#home" className='phoneAndGlass glas-max' onClick={toggleSearch}><i className="fa fa-search search"></i></Nav.Link>
                        <Nav.Link href="#home" className='phoneAndGlass hide-at-1200'><i className="fa fa-phone phone"></i> (+01) 999 888 777</Nav.Link>
                        
                        <Link to="/contact" className='contact-btn'><Button>Contact US <i className="fa fa-chevron-right"></i></Button></Link>
                    </Nav>
                    <ul className='social d-none'>
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-google"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                    </ul>
                </Navbar.Collapse>
            </Container>
            <div className={`nav-search-bar ${isSearchShow ? "showSearch":"hideSearch"}`}>
                <form>
                    <input type="text" className="form-control" placeholder="Type to search" data-usechatgpt-start-offset="0" data-usechatgpt-end-offset="0" data-usechatgpt-marker="usechatgpt-marker" data-usechatgpt-marker-start-id="usechatgpt-start-marker-9f2ec742-cfeb-46f0-94c4-aae83c0b4baa" data-usechatgpt-marker-end-id="usechatgpt-end-marker-d57637a3-d115-47ef-9fc4-b2a8b349f167"/>
                    <span><i className="fa fa-search"></i></span>
                </form>
                <span id="searchRemove" onClick={toggleSearch}><i className="fa fa-close close"></i></span>
            </div>
        </Navbar>
    );
}

export default Header;

// 47