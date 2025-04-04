import { LoginForm } from "../components/auth/LoginForm.tsx";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <LoginForm />
    </div>
  );
}
