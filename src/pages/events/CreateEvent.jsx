import axios from "axios";
import { useState } from "react";

const createEvent = async (newEvent) => {
  const response = await axios.post("http://localhost:5000/api/events", newEvent); // Adjust your API endpoint as needed
  return response.data;
};

function CreateEvent() {

  const [newEvent, setNewEvent] = useState({
    eventName: "",
    eventDate: "",
    hours: "",
    location: "",
    description: "",
    guestsAmount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      await createEvent(newEvent); 
 
      setNewEvent({
        eventName: "",
        eventDate: "",
        hours: "",
        location: "",
        description: "",
        guestsAmount: 0,
      });
      console.log("success")
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventName"
          value={newEvent.eventName}
          onChange={handleInputChange}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          name="eventDate"
          value={newEvent.eventDate}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="hours"
          value={newEvent.hours}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
        />
        <input
          type="text"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="guestsAmount"
          value={newEvent.guestsAmount}
          onChange={handleInputChange}
          placeholder="Guests Amount"
          required
        />
        <button type="submit" >
          Create Event
        </button>
      </form>
    </>
  );
}

export default CreateEvent;
