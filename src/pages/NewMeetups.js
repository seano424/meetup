import React from "react";
import { useHistory } from 'react-router-dom'
import MeetupForm from '../components/MeetupForm'

export default function NewMeetups(props) {
  const history = useHistory()

  function meetupHandler(meetupData) {
    fetch('https://meetups-18d3c-default-rtdb.firebaseio.com/meetups.json', 
    {
      method: 'post',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(() => history.replace('/all'))
  }

  return (
    <>
      <h1>Create a new meetup</h1>
      <MeetupForm onAddMeetup={meetupHandler}/>
    </>
  );
}
