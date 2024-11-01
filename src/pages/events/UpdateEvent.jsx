import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import birthday from "../../assets/birthday1.jpg";
import { useNavigate } from "react-router-dom";

function UpdateEvent() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    eventName: "",
    description: "",
    eventDate: "",
    hours: "",
    guestsAmount: "",
    location: "",
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const event = await response.json();
        setData(event);
        setEventData({
          eventName: event.eventName || "",
          description: event.description || "",
          eventDate: event.eventDate || "",
          hours: event.hours || "",
          guestsAmount: event.guestsAmount || "",
          location: event.location || "",
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]); // Only run when id changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token from localStorage for authorization
    let token = localStorage.getItem("token");

    if (!token) {
      console.error("Authentication token not found");
      // Optionally, alert the user or redirect to login
      return;
    }

    try {
      token = JSON.parse(token);
      const response = await axios.patch(
        `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event/${id}`,
        eventData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access}`, // Include token in headers
          },
        }
      );

      console.log(response.data.message);
      navigate("/events");

      // Optionally, redirect or update UI on successful update
    } catch (error) {
      if (error.response) {
        console.error("Error updating event:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

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

  return (
    <>
      <div className="p-4">
        <div className="text-center mb-6 hidden md:block">
          <h2 className="text-2xl font-bold font-libre  md:text-3xl lg:text-4xl xl:text-[40px] text-[#a2724e]">
            Update Event
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-[50px]">
          <div className="w-full lg:w-[45%] md:w-[50%] md:mt-[px] xl:mt-[40px]">
            <img
              src={birthday}
              className="w-full rounded-[20px] shadow-md"
              alt="Event"
            />
            <p className="mt-[20px] text-[#a2724e] font-poppins">
              Eventplanner@gmail.com
            </p>
            <p className="mt-[20px] text-[#a2724e] font-poppins">
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
                className="text-lg text-[#a2724e] font-bold "
              >
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                value={eventData.eventName}
                onChange={handleInputChange}
                placeholder="Event Name"
                required
                className="  placeholder-[#a2724e] text-[#a2724e] block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="eventDate"
                className="text-lg text-[#a2724e] font-bold  orange-700"
              >
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleInputChange}
                required
                className="  text-[#a2724e] block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="hours"
                className="text-lg text-[#a2724e] font-bold "
              >
                Hours
              </label>
              <input
                type="time"
                name="hours"
                value={eventData.hours}
                onChange={handleInputChange}
                required
                className="text-[#a2724e]   block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="location"
                className="text-lg text-[#a2724e] font-bold"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleInputChange}
                placeholder="Location"
                required
                className="placeholder-[#a2724e] text-[#a2724e]  block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="description"
                className="text-lg text-[#a2724e] font-bold "
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
                className=" placeholder-[#a2724e] text-[#a2724e] block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="guestsAmount"
                className="text-lg text-[#a2724e] font-bold  "
              >
                Guests Amount
              </label>
              <input
                type="number"
                name="guestsAmount"
                value={eventData.guestsAmount}
                onChange={handleInputChange}
                placeholder="Guests Amount"
                required
                className=" placeholder-[#a2724e] text-[#a2724e] block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-700 text-white py-3 px-4 rounded-lg shadow-md transition duration-200 hover:bg-[#a2724e]"
            >
              Update
            </button>
          </form>
        </div>
        <footer className="mt-[100px]"></footer>
      </div>
    </>
  );
}

export default UpdateEvent;
