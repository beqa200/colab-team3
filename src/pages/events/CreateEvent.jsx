import axios from "axios";
import { useState } from "react";

const createEvent = async (newEvent) => {
  const response = await axios.post(
    "http://localhost:5000/api/events",
    newEvent
  ); // Adjust your API endpoint as needed
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
      console.log("success");
    } catch (error) {
      console.error(
        "Error creating event:",
        error
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img
          src="./images/event-photo.jpg"
          className="w-[80%] md:w-[60%] lg:w-[40%] rounded-[20px] mx-auto block mt-[100px]"
        />
        <div className="flex flex-col items-center text-center space-y-4 mt-[30px]">
          <input
            type="text"
            name="eventName"
            value={newEvent.eventName}
            onChange={handleInputChange}
            placeholder="Event Name"
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />
          <input
            type="date"
            name="eventDate"
            value={newEvent.eventDate}
            onChange={handleInputChange}
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />
          <input
            type="time"
            name="hours"
            value={newEvent.hours}
            onChange={handleInputChange}
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />
          <input
            type="number"
            name="guestsAmount"
            value={newEvent.guestsAmount}
            onChange={handleInputChange}
            placeholder="Guests Amount"
            required
            className="w-[80%] md:w-[60%] lg:w-[40%] p-2 border rounded"
          />

          <button
            type="submit"
            className="w-[80%] md:w-[60%] lg:w-[40%] bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all ease-in-out duration-300"
          >
            Create Event
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateEvent;
