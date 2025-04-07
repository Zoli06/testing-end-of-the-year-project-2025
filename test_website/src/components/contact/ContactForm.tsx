import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useAlert } from "../../hooks/useAlert.ts";

export function ContactForm() {
  const { showAlert } = useAlert();
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        showAlert("Thank you for your feedback!", "success");
      }}
    >
      <h1 className="text-center">Contact Us & Feedback</h1>
      <h2 className="text-center">
        If you have any questions or feedback, feel free to reach out to us!
      </h2>
      <div className="d-flex flex-column gap-2">
        <Form.Group>
          <Form.Check
            label="Anonymous"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
        </Form.Group>
        <p>
          {isAnonymous
            ? "Your feedback will be submitted anonymously."
            : "We value your feedback and will respond to you."}
        </p>
        {!isAnonymous && (
          <>
            <Form.Control placeholder="Name" required />
            <Form.Control placeholder="Email address" required />
          </>
        )}
        <Form.Control as="textarea" placeholder="Your thoughts" required />
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
