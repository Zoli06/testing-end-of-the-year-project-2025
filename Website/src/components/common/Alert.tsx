// import { Alert as MuiAlert, Container } from "@mui/material";
import { Alert as BootstrapAlert, Container } from "react-bootstrap";
import { useAlert } from "../../hooks/useAlert.ts";

export function Alert() {
  const { alert, closeAlert } = useAlert();

  return (
    <div className="d-flex justify-content-center">
      <Container className="d-flex flex-column align-content-stretch position-fixed bottom-0">
        <BootstrapAlert
          variant={alert.variant}
          onClose={closeAlert}
          dismissible
          className="alert-text"
        >
          {alert.message}
        </BootstrapAlert>
      </Container>
    </div>
  );
}
