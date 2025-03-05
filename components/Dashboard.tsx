import React from 'react';
import { MessageCircle, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const mockStats = {
  total: 24,
  pending: 8,
  inProgress: 10,
  resolved: 6
};

const mockRecentFeedback = [
  {
    id: '1',
    title: 'Improve Meeting Efficiency',
    status: 'pending',
    submitted_at: '2025-03-05T08:00:00Z'
  },
  {
    id: '2',
    title: 'Remote Work Equipment',
    status: 'in_progress',
    submitted_at: '2025-03-04T15:30:00Z'
  },
  {
    id: '3',
    title: 'Team Building Activities',
    status: 'resolved',
    submitted_at: '2025-03-03T11:20:00Z'
  }
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Feedback"
          value={mockStats.total}
          icon={<MessageCircle className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          title="Pending"
          value={mockStats.pending}
          icon={<AlertCircle className="h-6 w-6" />}
          color="yellow"
        />
        <StatCard
          title="In Progress"
          value={mockStats.inProgress}
          icon={<Clock className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          title="Resolved"
          value={mockStats.resolved}
          icon={<CheckCircle className="h-6 w-6" />}
          color="green"
        />
      </div>

      {/* Recent Feedback */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
        <div className="space-y-4">
          {mockRecentFeedback.map((feedback) => (
            <div key={feedback.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{feedback.title}</p>
                <p className="text-sm text-gray-500">
                  {new Date(feedback.submitted_at).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                feedback.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                feedback.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {feedback.status.replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: 'blue' | 'yellow' | 'purple' | 'green';
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`rounded-full p-3 ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}