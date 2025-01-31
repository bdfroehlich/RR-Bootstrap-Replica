import { Nav, Navbar, Button } from 'react-bootstrap'



function TopBar () {
    
    return (
        <Navbar bg="light" expand="lg" sticky="top" >
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home" className="d-inline-block align-left">
            <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{marginRight:"2vw"}}>
            <Nav className="mr-auto"> 
            </Nav>
            <Nav>
                <Nav.Link href="#LogIn" 
                style={{
                    margin:"0 22px", 
                    fontSize:"18px", 
                    fontWeight:"600"}}>
                        Log In
                </Nav.Link>
                <Button variant="success" 
                style={{
                    backgroundColor:"#0AAD0A", 
                    fontSize:"18px",
                    fontWeight:"600",
                    padding:"8px 16px", 
                    borderRadius:"20px"}}>
                    Sign Up
                </Button>{' '}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )

}

export default TopBar
