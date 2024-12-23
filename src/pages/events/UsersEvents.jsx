import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const fetchEvents = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/events"
  );
  return response.data;
};

function Events() {
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting data");
      }
      console.log("Event deleted");
    } catch (error) {
      console.error(
        "Error deleting event:",
        error
      );
    }
  };

  return (
    <>
      <div className="mt-[100px]">
        {data && data.length > 0 ? (
          data.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md w-full"
            >
              <h2 className="text-xl font-bold mb-2 text-center text-gray-800">
                {event.eventName}
              </h2>
              <p className="text-gray-600 text-center mb-1 text-[25px]">
                Date: {event.eventDate}
              </p>
              <p className="text-gray-600 text-center mb-1 text-[25px]">
                Time: {event.hours}
              </p>
              <p className="text-gray-600 text-center mb-1 text-[25px]">
                Location: {event.location}
              </p>
              <p className="text-gray-600 text-center mb-3 text-[25px]">
                Description: {event.description}
              </p>
              <p className="text-gray-600 text-center mb-4 text-[25px]">
                Guests: {event.guestsAmount}
              </p>

              <Link to={`/event/${event.id}`}>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  More Details
                </button>
              </Link>

              <button
                className="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() =>
                  handleDelete(event.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No events found.
          </p>
        )}
      </div>
    </>
  );
}

export default Events;
