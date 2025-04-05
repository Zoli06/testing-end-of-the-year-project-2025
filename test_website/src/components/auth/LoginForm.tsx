import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { useAlert } from "../../hooks/useAlert";

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
      showAlert("Invalid email or password", "error");
    }
  };

  return (
    <Container
      className="flex flex-col items-stretch justify-center bg-gray-100 p-8 rounded-lg shadow-md gap-1"
      component={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <Typography variant="h4" className="text-center">
        Welcome back!
      </Typography>
      <Typography variant="body2" className="text-center mb-4">
        Email: admin@admin.com
        <br />
        Password: admin123
      </Typography>
      <TextField
        id="login-email"
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="login-password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        id="login-button"
      >
        Login
      </Button>
    </Container>
  );
}
