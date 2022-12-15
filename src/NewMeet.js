import NewMeetUpForm from './NewMeetUpForm';
import { useNavigate  } from 'react-router-dom';

function NewMeetupPage() {
    const history = useNavigate ();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://meetups-c9a9a-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
        history('/');
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;