import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="login_container">
      <p className="title">Login</p>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 mt-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPasswordCheck"
        label="Confirm Password"
        className="mt-3"
      >
        <Form.Control type="password" placeholder="Confirm Password" />
      </FloatingLabel>
    </Container>
  );
}
