import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from "../context/LoginProvider";

function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let count = 0;
  const { user, setUser } = useLogin();

  useEffect(() => {
    fetch(
      "https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event"
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response.json());
          throw new Error("Network response was not ok");
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

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <p className="text-lg text-center  text-[#a2724e] ">Loading...</p>{" "}
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <p className="text-lg text-center  text-[#a2724e] ">
          Error {error.message}
        </p>{" "}
      </div>
    );

  const handleDelete = async (id) => {
    console.log("Deleting event with ID:", id);
    let token = localStorage.getItem("token");

    if (!token) {
      console.error("Authentication token not found");
      // Optionally, alert the user or redirect to login
      return;
    }

    try {
      token = JSON.parse(token); // Ensure that the token is valid JSON

      const response = await fetch(
        `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access}`, // Use token.access directly
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Error deleting data: ${response.status} - ${errorText}`
        );
      }

      console.log("Event deleted successfully");
      window.location.reload();
      // Optional: Notify the user or refresh data here
    } catch (error) {
      console.error("Error deleting event:", error.message);
      // Optionally notify the user of the error, e.g., using an alert or toast notification
    }
  };
  const handleRsvp = async (id) => {
    try {
      const tokenStr = localStorage.getItem("token");
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
      console.error("Error deleting event:", error);
    }
  };
  console.log(user);
  return (
    <>
      <div className="flex flex-wrap gap-4 p-6">
        {data && data.length > 0 ? (
          data.map((event) => (
            <div
              key={event.id}
              className="flex-1 basis-full sm:basis-1/2 lg:basis-1/4 p-4  text-left"
              style={{
                borderWidth: "2px",
                border: "2px solid #a2724e",
                borderRadius: "16px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-center text-[#a2724e]">
                {event.eventName}
              </h2>
              <p className="text-gray-600 text-left mb-1 text-sm ">
                Date: {event.eventDate}
              </p>
              <p className="text-gray-600 text-left mb-1 text-sm">
                Time: {event.hours}
              </p>
              <p className="text-gray-600 left mb-1 text-base">
                Location: {event.location}
              </p>
              <p className="text-gray-600 text-left mb-4 text-base">
                Guests: {event.guestsAmount}
              </p>

              <p className="text-lg font-bold mb-4 text-left text-[#a2724e]">
                Description: {event.description}
              </p>
              {user != null ? (
                user.id === event.organizer.id ? (
                  <>
                    <Link to={`/updateEvent/${event.id}`}>
                      <button className="w-full bg-[#a2724e] text-white py-2 rounded-lg hover:bg-[#7d4a30] transition duration-300">
                        Update
                      </button>
                    </Link>{" "}
                    <Link to={`/eventDetails/${event.id}`}>
                      <button
                        style={{
                          borderWidth: "2px",
                          border: "2px solid #a2724e",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        className="w-full bg-white text-[#a2724e] py-2 mt-2 rounded-lg hover:underline transition duration-300"
                      >
                        More Details
                      </button>
                    </Link>
                    <button
                      className="w-full bg-[#a2724e] text-white py-2 mt-2 rounded-lg hover:bg-[#7d4a30] transition duration-300"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <button
                    className="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => handleRsvp(event.id)}
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
        <div class="flex-1 basis-full sm:basis-1/2 lg:basis-1/4 p-4 invisible"></div>
        <div class="flex-1 basis-full sm:basis-1/2 lg:basis-1/4 p-4 invisible"></div>
      </div>
    </>
  );
}

export default Events;
