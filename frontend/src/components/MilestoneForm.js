import React, { useState } from 'react';

export default function MilestoneForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Work');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onAdd({ title, category });
    setTitle('');
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="mb-4 space-y-2">
      <input value={title} onChange={e=>setTitle(e.target.value)}
        className="w-full border p-2 rounded" placeholder="Enter milestone" />
      <select value={category} onChange={e=>setCategory(e.target.value)}
        className="w-full border p-2 rounded">
        <option>Work</option>
        <option>Personal</option>
        <option>Health</option>
      </select>
      <button disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded">
        {loading ? 'Saving...' : 'Add Milestone'}
      </button>
    </form>
  );
}
