import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { useAlert } from "../../hooks/useAlert";
import { Form, Button } from "react-bootstrap";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLogin();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(email, password).success) {
      navigate("/browse");
    } else {
      showAlert("Invalid email or password", "danger");
    }
  };

  return (
    <Form
      className="d-flex flex-column gap-1"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <h1 className="text-center">Welcome back!</h1>
      <p className="text-center">
        Email: admin@admin.com
        <br />
        Password: admin123
      </p>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        color="primary"
        type="submit"
        className="login-button"
      >
        Login
      </Button>
    </Form>
  );
}
