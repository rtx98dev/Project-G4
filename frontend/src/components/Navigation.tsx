import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <Navbar data-bs-theme="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Project G4</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation