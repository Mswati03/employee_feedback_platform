"use client"
import React from "react";
import { format } from "date-fns";

const mockFeedback = [
  {
    id: "1",
    title: "Improve Meeting Efficiency",
    description:
      "We should implement a strict agenda and time-boxing for meetings to make them more productive.",
    category: "workplace",
    status: "pending",
    submitted_at: "2025-03-05T08:00:00Z",
    hr_notes: "",
  },
  {
    id: "2",
    title: "Remote Work Equipment",
    description:
      "Consider providing better equipment for remote workers to improve productivity.",
    category: "benefits",
    status: "in_progress",
    submitted_at: "2025-03-04T15:30:00Z",
    hr_notes: "Discussing with IT department about budget allocation.",
  },
  {
    id: "3",
    title: "Team Building Activities",
    description:
      "Monthly virtual team building activities would help improve team cohesion.",
    category: "communication",
    status: "resolved",
    submitted_at: "2025-03-03T11:20:00Z",
    hr_notes: "Implemented monthly virtual game sessions.",
  },
];

export default function FeedbackList() {
  const isHR = true; // Mock HR status

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Feedback List</h2>
      <div className="space-y-6">
        {mockFeedback.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="mt-1 text-sm text-gray-500">
                  Submitted {format(new Date(item.submitted_at), "PPP")}
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : item.status === "in_progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {item.status.replace("_", " ")}
              </div>
            </div>

            <div className="mb-4">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {item.category}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{item.description}</p>

            {isHR && (
              <div className="border-t pt-4 mt-4">
                <div className="flex space-x-2 mb-4">
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      item.status === "pending"
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Pending
                  </button>
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      item.status === "in_progress"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    In Progress
                  </button>
                  <button
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      item.status === "resolved"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Resolved
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HR Notes
                  </label>
                  <textarea
                    value={item.hr_notes}
                    onChange={(e) => {
                      // Update HR notes
                        item.hr_notes = e.target.value;
                    }}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows={2}
                    placeholder="Add private notes here..."
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
