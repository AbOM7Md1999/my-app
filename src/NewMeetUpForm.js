import Card from "./Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from 'react';

function NewMeetUpForm(props) {
const titleref = useRef();
const imageref = useRef();
const addressref = useRef();
const descriptionref = useRef();

    function SubmitHandler(event){
        event.preventDefault();
        const enttitle = titleref.current.value;
        const entimage = imageref.current.value;
        const entaddress = addressref.current.value;
        const entdescription = descriptionref.current.value;

        const MeetupData = {title: enttitle, image: entimage, 
            address: entaddress, description: entdescription};
            console.log(MeetupData);

            props.onAddMeetup(MeetupData);

    }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler} >
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleref} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressref} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionref}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
