import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MeetupForm(props) {

  const titleInputRef = useRef()
  const urlInputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleInputRef.current.value);
    const title = titleInputRef.current.value
    console.log(urlInputRef.current.value);
    const url = urlInputRef.current.value

    const newMeetupData = {
      title: title,
      url: url
    }

    props.onAddMeetup(newMeetupData)
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Control
          required
          size="lg"
          type="text"
          placeholder="Give us a creative title for your home!"
          ref={titleInputRef}
        />
      </Form.Group>

      <Form.Group controlId="formBasicImage">
        <Form.Control
          required
          type="url"
          placeholder="Put in an image url. Try unsplash.com!"
          ref={urlInputRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
