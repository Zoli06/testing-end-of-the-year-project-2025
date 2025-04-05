import { Alert as MuiAlert, Container } from "@mui/material";
import { useAlert } from "../../hooks/useAlert.ts";

export function Alert() {
  const { alert, closeAlert } = useAlert();

  return (
    <div className="fixed bottom-4 left-0 right-0">
      <Container>
        <MuiAlert
          severity={alert.severity}
          variant="outlined"
          onClose={closeAlert}
        >
          {alert.message}
        </MuiAlert>
      </Container>
    </div>
  );
}
