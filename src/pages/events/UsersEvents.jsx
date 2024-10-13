import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const fetchEvents = async () => {
  const response = await axios.get("http://localhost:5000/api/events");
  console.log(response.data);
  return response.data;
};


function Events() {
  // const [events, setEvents] = useState([]); 


  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting data');
      }
      console.log("deleted")
      // Remove the deleted event from the local state
      // setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
    } catch (error) {
      // setError(error.message); // Update error state
    }
  };
  return (
    <>
      {data && data.length > 0 ? (
        data.map((event) => (
          <div key={event.id}>
            <Link to={`/updateEvent/${event.id}`}><h2 style={{color: "red"}}>{event.eventName}</h2></Link>
            <p>{event.eventDate}</p>
            <p>{event.hours}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <p>{event.guestsAmount}</p>
            <button style={{background: "red"}} onClick={() => handleDelete(event.id)}>delete</button>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </>
  );
}

export default Events;
