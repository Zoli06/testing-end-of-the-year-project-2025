import { Alert, AlertProps, Container } from "@mui/material";

export function Notification({
  message,
  severity = "success",
  onClose,
}: {
  message: string;
  severity?: AlertProps["severity"];
  onClose?: () => void;
}) {
  return (
    <div className="fixed bottom-4 left-0 right-0">
      <Container>
        <Alert severity={severity} variant="outlined" onClose={onClose}>
          {message}
        </Alert>
      </Container>
    </div>
  );
}
