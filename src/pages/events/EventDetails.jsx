import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

// Register Chart.js elements
Chart.register(ArcElement);

const fetchEventById = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/events/${id}`
  );
  return response.data;
};

function EventDetails() {
  const { id } = useParams();
  const { data: event, isLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id),
  });

  const [participantInfo, setParticipantInfo] =
    useState("");

  const handleInviteParticipant = async () => {
    if (!participantInfo) {
      alert(
        "Please enter a valid email or username"
      );
      return;
    }

    try {
      const response = await axios.post(
        `/api/events/${id}/participants`,
        {
          email: participantInfo,
          rsvp: "pending",
        }
      );
      setParticipantInfo("");
      alert(
        "Invitation sent! The participant must confirm their RSVP."
      );
    } catch (error) {
      console.error(
        "Error details:",
        error.response
          ? error.response.data
          : error.message
      );
      alert(
        "Failed to send the invitation. Please try again."
      );
    }
  };

  // Function to calculate RSVP statistics
  const calculateRSVPStats = (participants) => {
    const stats = {
      confirmed: 0,
      pending: 0,
      rejected: 0,
    };

    participants.forEach((participant) => {
      if (participant.rsvp === "confirmed")
        stats.confirmed++;
      else if (participant.rsvp === "pending")
        stats.pending++;
      else if (participant.rsvp === "rejected")
        stats.rejected++;
    });

    return stats;
  };

  if (isLoading) {
    return <p>Loading event details...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

  // Extract RSVP statistics
  const rsvpStats = event.participants
    ? calculateRSVPStats(event.participants)
    : { confirmed: 0, pending: 0, rejected: 0 };

  // Prepare data for the RSVP statistics chart
  const chartData = {
    labels: ["Confirmed", "Pending", "Rejected"],
    datasets: [
      {
        data: [
          rsvpStats.confirmed,
          rsvpStats.pending,
          rsvpStats.rejected,
        ],
        backgroundColor: [
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
        ],
        hoverBackgroundColor: [
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
        ],
      },
    ],
  };

  // Only show chart if there are RSVP entries, otherwise show a message
  const chartIsEmpty =
    rsvpStats.confirmed === 0 &&
    rsvpStats.pending === 0 &&
    rsvpStats.rejected === 0;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-[80%] lg:w-[60%] mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        {event.eventName}
      </h2>
      <p className="text-gray-600 text-center mb-2 text-[18px] md:text-[22px]">
        Date: {event.eventDate}
      </p>
      <p className="text-gray-600 text-center mb-2 text-[18px] md:text-[22px]">
        Time: {event.hours}
      </p>
      <p className="text-gray-600 text-center mb-2 text-[18px] md:text-[22px]">
        Location: {event.location}
      </p>
      <p className="text-gray-600 text-center mb-2 text-[18px] md:text-[22px]">
        Description: {event.description}
      </p>
      <p className="text-gray-600 text-center mb-4 text-[18px] md:text-[22px]">
        Guests: {event.guestsAmount}
      </p>

      {/* RSVP Statistics Chart */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 text-[18px] md:text-[20px]">
          RSVP Statistics
        </h3>
        <div className="w-[80%] mx-auto">
          {chartIsEmpty ? (
            <p className="text-center text-gray-600">
              No RSVP data available yet.
            </p>
          ) : (
            <Pie data={chartData} />
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 text-[18px] md:text-[20px]">
          Participants
        </h3>
        {event.participants &&
        event.participants.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600 text-[16px]">
            {event.participants.map(
              (participant, index) => (
                <li key={index}>
                  {participant.email ||
                    participant.username}{" "}
                  - RSVP: {participant.rsvp}
                </li>
              )
            )}
          </ul>
        ) : (
          <p className="text-gray-600 text-[15px]">
            No participants added yet.
          </p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-[18px] md:text-[20px]">
          Invite a participant
        </h3>
        <input
          type="text"
          placeholder="Enter participant's email or username"
          value={participantInfo}
          onChange={(e) =>
            setParticipantInfo(e.target.value)
          }
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleInviteParticipant}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 font-bold"
        >
          Send Invitation
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
