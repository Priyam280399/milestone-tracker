import React, { useEffect, useState } from 'react';
import MilestoneForm from './components/MilestoneForm';
import MilestoneList from './components/MilestoneList';

const API = 'http://localhost:5000';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch(`${API}/milestones`);
    const d = await res.json();
    setData(d);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const add = async (payload) => {
    await fetch(`${API}/milestones`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    load();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Milestone Tracker</h1>
        <MilestoneForm onAdd={add} />
        {loading ? <p className="text-center">Loading...</p> :
          data.length === 0 ? <p className="text-center text-gray-500">No milestones</p> :
          <MilestoneList milestones={data} />}
      </div>
    </div>
  );
}
