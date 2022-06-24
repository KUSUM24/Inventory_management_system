import React, { useRef, useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { async } from "q";

const Signup = () => {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDeafult();
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setMessage("User added successfully.");
    } catch (e) {
      setMessage("");
      setError(`Failed to SignIn ${e}`);
    }
  };

  return (
    <div className="add-user-main">
      <div className="add-user-heading text-center h1 pt-4">
        SNURSS-THE NIGHTY SHOP
      </div>
      <div
        className=" d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="add-user-body w-100" style={{ maxWidth: "400px" }}>
          <Card className="p-2">
            <Card.Header
              style={{
                backgroundColor: "white",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <h2 className="text-center">Add User</h2>
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
                  Add
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="w-100 text-center mt-2 mb-2">
              <Link
                className="btn btn-secondary w-100"
                onClick={() => history.goBack()}
              >
                Cancel
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
