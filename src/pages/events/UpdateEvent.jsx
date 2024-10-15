import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";

const fetchEvents = async (id) => {
  console.log(id);
  const response = await axios.get(`http://localhost:5000/api/events/${id}`);
  return response.data;
};

function UpdateEvent() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["events", id], 
    queryFn: () => fetchEvents(id), 
  });


  const [eventData, setEventData] = useState({
    eventName: "",
    description: "",
    eventDate: "",
    hours: "",
    guestsAmount: "",
    location: "",
  });


  useEffect(() => {
    if (data) {
      setEventData({
        eventName: data.eventName || "",
        description: data.description || "",
        eventDate: data.eventDate || "",
        hours: data.hours || "",
        guestsAmount: data.guestsAmount || "",
        location: data.location || "",
      });
    }
  }, [data]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/events/${id}`,
        eventData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventName"
          value={eventData.eventName}
          onChange={handleInputChange}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          name="eventDate"
          value={eventData.eventDate}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="hours"
          value={eventData.hours}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
        />
        <input
          type="text"
          name="description"
          value={eventData.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="guestsAmount"
          value={eventData.guestsAmount}
          onChange={handleInputChange}
          placeholder="Guests Amount"
          required
        />
        <button type="submit">update Event</button>
      </form>
    </>
  );
}

export default UpdateEvent;
