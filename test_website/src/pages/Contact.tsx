import { Header } from "../components/common/Header.tsx";
import { useState } from "react";
import { Notification } from "../components/common/Notification.tsx";
import { ContactForm } from "../components/contact/ContactForm.tsx";

export function Contact() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success",
  );

  const handleAlertDisplay = (text: string, severity: "success" | "error") => {
    setAlertMessage(text);
    setAlertSeverity(severity);
    setDisplayAlert(true);
  };

  return (
    <>
      <Header cart={[]} />
      <ContactForm displayAlert={handleAlertDisplay} />
      {displayAlert && (
        <Notification
          message={alertMessage}
          severity={alertSeverity}
          onClose={() => {
            setDisplayAlert(false);
          }}
        />
      )}
    </>
  );
}
