import React, { useRef, useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/categories");
    } catch (e) {
      history.push("/");
      setMessage("");
      setError(`Failed to Login ${e}`);
    }
    setLoading(false);
  };
  return (
    <div className="login-main">
      <div className="login-heading text-center h1 pt-4">
        INVENTORY MANAGEMENT SYSTEM
      </div>
      <div
        className=" d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="login-body w-100" style={{ maxWidth: "400px" }}>
          <Card className="p-2">
            <Card.Header
              style={{
                backgroundColor: "white",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <h2 className="text-center">Login</h2>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Log In
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
              <div className="w-100 text-center mt-2">
                <Link to="forgot-password">Forgot Password</Link>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
