import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from "../context/LoginProvider";
function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, setUser } = useLogin();
  useEffect(() => {
    fetch(
      "https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event"
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response.json());
          throw new Error(
            "Network response was not ok"
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    const niga = localStorage.getItem("user");
    if (niga) {
      const br = JSON.parse(niga);
      setUser(br);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
  const handleRsvp = async (id) => {
    try {
      const tokenStr =
        localStorage.getItem("token");
      if (tokenStr) {
        const token = JSON.parse(tokenStr);
        const response = await fetch(
          `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/rsvp`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.access}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              event_id: id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error deleting data");
        }
        if (response.ok) {
          throw alert("rsvp get successfuly");
        }
        console.log("Event deleted");
      }
    } catch (error) {
      console.error(
        "Error deleting event:",
        error
      );
    }
  };
  console.log(user);
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
              {user != null ? (
                user.id === event.organizer.id ? (
                  <>
                    {" "}
                    <Link
                      to={`/eventDetails/${event.id}`}
                    >
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
                  </>
                ) : (
                  <button
                    className="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() =>
                      handleRsvp(event.id)
                    }
                  >
                    rsvp
                  </button>
                )
              ) : (
                "ngg"
              )}
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
