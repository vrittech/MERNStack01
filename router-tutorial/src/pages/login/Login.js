import { useContext, useRef } from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { attemptLogin, error } = useContext(AuthContext);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    attemptLogin(username, password);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {!error ? (
            <Card.Text>
              Please enter your username and password to login
            </Card.Text>
          ) : (
            <Card.Text>There was some error</Card.Text>
          )}

          <>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                ref={usernameRef}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                ref={passwordRef}
                type="password"
              />
            </InputGroup>
            <Button variant="primary" size="lg" onClick={handleLogin}>
              Sign in
            </Button>
          </>
        </Card.Body>
      </Card>
    </div>
  );
}
