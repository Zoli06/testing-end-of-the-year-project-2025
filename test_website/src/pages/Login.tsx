import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Login() {
  const correctEmail = "admin@admin.com";
  const correctPassword = "admin123";

  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      navigate("/browse");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <Container
        className="flex flex-col items-stretch justify-center bg-gray-100 p-8 rounded-lg shadow-md max-w-sm gap-1"
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
          Email: {correctEmail}
          <br />
          Password: {correctPassword}
        </Typography>
        <TextField
          id="email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="body2" color="error" className="text-center">
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          id="login-button"
        >
          Login
        </Button>
      </Container>
    </div>
  );
}
