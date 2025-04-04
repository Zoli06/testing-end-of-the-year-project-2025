import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AlertDispatchContext } from "../../context/alert/context.ts";

export function ContactForm() {
  const alertDispatch = useContext(AlertDispatchContext);

  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <Container
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        alertDispatch({
          message: "Thank you for your feedback!",
          severity: "success",
          open: true,
        });
      }}
    >
      <Typography variant="h4" className="text-center mb-4">
        Contact Us & Feedback
      </Typography>
      <Typography variant="body1" className="text-center">
        If you have any questions or feedback, feel free to reach out to us!
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
        }
        label={"Anonymous"}
      />
      <Typography variant="body2" className="mb-4">
        {isAnonymous
          ? "Your feedback will be submitted anonymously."
          : "We value your feedback and will respond to you."}
      </Typography>
      {!isAnonymous && (
        <>
          <TextField label="Name" fullWidth margin="normal" required />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
        </>
      )}
      <TextField
        label="Message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
}
