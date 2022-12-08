import axios from "../../config/axios";
import { useRef, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Counter  () {
  const [count, setCount] = useState(0);

  return(
    <>
    {count}
    <button onClick={() => setCount(prev => prev+1)}>Increase cound</button>
    </>

  )
}
 function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const { data } = await attemptLogin(email, password);
      setError(null);
      //save the token in LocalStorage
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("refresh_token", data.refreshToken);
      // redirect
      navigate("/products")
    } catch (err) {
      console.log("My Error", err);
      setError(err.message);
    }
  };

  const attemptLogin = async (email, password) => {
    // const response = await fetch("http://localhost:8000/api/v1/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type' : 'application/json'
    //   }
    // });
    // const json = await response.json();
    // if (response.status >= 300) {
    //   throw json;
    // }
    // return json;
    try {
      const response = await axios.post("auth/login", { email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  return (
    <>
    <Counter />
    <Counter />
    </>
    // <Card>
    //   <Card.Body>
    //     <Card.Title>Login</Card.Title>
    //     <Card.Subtitle>{error}</Card.Subtitle>
    //     <Card.Text>

    //       <Form onSubmit={submitForm}>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             ref={emailRef}
    //             type="email"
    //             placeholder="Enter email"
    //           />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             ref={passwordRef}
    //             type="password"
    //             placeholder="Password"
    //           />
    //         </Form.Group>

    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
  );
}

export default Login;
