export function useLogin() {
  const login = (username: string, password: string) => {
    const correctEmail = "admin@admin.com";
    const correctPassword = "admin123";

    if (username === correctEmail && password === correctPassword) {
      return { success: true };
    } else {
      return { success: false, error: "Invalid email or password" };
    }
  };

  return { login };
}
