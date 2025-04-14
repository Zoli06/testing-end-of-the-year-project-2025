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
          {/*<Form.Check*/}
          {/*  className="contact-anonymous"*/}
          {/*  label="Anonymous"*/}
          {/*  checked={isAnonymous}*/}
          {/*  onChange={(e) => setIsAnonymous(e.target.checked)}*/}
          {/*/>*/}
          <Form.Check>
            <Form.Check.Input
              className="contact-anonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            <Form.Check.Label>Anonymous</Form.Check.Label>
          </Form.Check>
        </Form.Group>
        {!isAnonymous && (
          <>
            <Form.Control
              className="contact-name"
              placeholder="Name"
              required
            />
            <Form.Control
              className="contact-email"
              placeholder="Email address"
              required
            />
          </>
        )}
        <Form.Control
          className="contact-message"
          as="textarea"
          placeholder="Your thoughts"
          required
        />
        <Button className="contact-submit" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
