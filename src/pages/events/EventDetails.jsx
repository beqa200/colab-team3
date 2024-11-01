import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

// Register Chart.js elements
Chart.register(ArcElement);

function EventDetails() {
  const { id } = useParams();
  const [rsvpStats, setRsvpStats] = useState();
  const [participants, setParticipants] =
    useState();
  const [event, setEvent] = useState();
  useEffect(() => {
    const fetchEventById = async (id) => {
      const response = await fetch(
        `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      }
      console.log("niga");
    };
    const fetchRsvpById = async (id) => {
      const response = await fetch(
        `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/rsvp?event_id=${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setParticipants(
          data?.map((rsvp) => rsvp.accepted)
        );
      }
      console.log("niga");
    };
    const fetchInfoById = async (id) => {
      const response = await fetch(
        `https://algouni-students.duckdns.org:8002/event-planner/team-3/api/event-info?event_id=${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setRsvpStats(data);
      }
      console.log("niga");
    };
    fetchEventById(id);
    fetchRsvpById(id);
    fetchInfoById(id);
  }, []);

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

  //if (isLoading) {
  //  return <p>Loading event details...</p>;
  //}

  if (!event) {
    return <p>Event not found</p>;
  }

  // Extract RSVP statistics
  //const rsvpStats = event.participants
  // ? calculateRSVPStats(event.participants)
  ///: { confirmed: 0, pending: 0, rejected: 0 };
  //
  // Prepare data for the RSVP statistics chart
  const chartData = rsvpStats
    ? {
        labels: [
          "Confirmed",
          "Pending",
          "Rejected",
        ],
        datasets: [
          {
            data: [
              rsvpStats.total_accepted_rsvps,
              rsvpStats.total_rsvp -
                (rsvpStats.total_accepted_rsvps +
                  rsvpStats.total_rejected_rsvps),
              rsvpStats.total_rejected_rsvps,
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
      }
    : {};

  // Only show chart if there are RSVP entries, otherwise show a message
  //  const chartIsEmpty =
  //  rsvpStats.confirmed === 0 &&
  //rsvpStats.pending === 0 &&
  // rsvpStats.rejected === 0;
  if (!rsvpStats) {
    return <div>Loading</div>;
  }
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
          <Pie data={chartData} />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 text-[18px] md:text-[20px]">
          Participants
        </h3>
        {participants &&
        participants.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600 text-[16px]">
            {participants?.map(
              (participant, index) => (
                <li key={index}>
                  {participant.email ||
                    participant.name}{" "}
                  - RSVP: {participant.accepted}
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
