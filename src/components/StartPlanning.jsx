import axios from "axios";
import { useState } from "react";

const createEvent = async (newEvent) => {
  const response = await axios.post(
    "http://localhost:5000/api/events",
    newEvent
  );
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
    <div className="p-4">
      <div className="text-center mb-6 hidden md:block">
        <h2 className="font-bold text-[25px] mt-[30px]">
          Contact Us
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-[50px]">
        <div className="w-full lg:w-[45%] md:w-[50%] md:mt-[px] xl:mt-[40px]">
          <img
            src="./images/event-photo.jpg"
            className="w-full rounded-[20px] shadow-md"
            alt="Event"
          />
          <p className="mt-[20px]">
            Eventplanner@gmail.com
          </p>
          <p className="mt-[20px]">
            +995 555 36 36 36{" "}
          </p>

          <div className="text-center mb-6">
            <h2 className="font-bold text-[25px] mt-[30px] md:hidden">
              Contact Us
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[50%] md:mt-[150px] lg:w-[45%] space-y-6 lg:space-y-10 xl:mt-[100px]  mt-[20px]"
        >
          <div className="relative">
            <label
              htmlFor="eventName"
              className="text-lg"
            >
              Event Name
            </label>
            <input
              type="text"
              name="eventName"
              value={newEvent.eventName}
              onChange={handleInputChange}
              placeholder="Event Name"
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="eventDate"
              className="text-lg"
            >
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={newEvent.eventDate}
              onChange={handleInputChange}
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="hours"
              className="text-lg"
            >
              Hours
            </label>
            <input
              type="time"
              name="hours"
              value={newEvent.hours}
              onChange={handleInputChange}
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="location"
              className="text-lg"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              placeholder="Location"
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="description"
              className="text-lg"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="guestsAmount"
              className="text-lg"
            >
              Guests Amount
            </label>
            <input
              type="number"
              name="guestsAmount"
              value={newEvent.guestsAmount}
              onChange={handleInputChange}
              placeholder="Guests Amount"
              required
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
      <footer className="mt-[100px]"></footer>
    </div>
  );
}

export default CreateEvent;
