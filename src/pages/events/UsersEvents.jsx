import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchEvents = async () => {
  const response = await axios.get("./data.json");
  console.log(response.data)
  return response.data;
 
};

function Events() {
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  return (
    <>
      {data && data.length > 0 ? (
        data.map((event) => (
          <div key={event.id}>
            <h2>{event.eventName}</h2>
            <p>{event.eventDate}</p>
            <p>{event.hours}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <p>{event.guestsAmount}</p>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </>
  );
}

export default Events;
