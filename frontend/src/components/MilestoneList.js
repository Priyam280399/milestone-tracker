import React from 'react';

export default function MilestoneList({ milestones }) {
  return (
    <ul className="space-y-2">
      {milestones.map(m => (
        <li key={m.id} className="p-3 border rounded shadow-sm">
          <p className="font-semibold">{m.title}</p>
          <span className="text-sm text-gray-500">{m.category}</span>
        </li>
      ))}
    </ul>
  );
}
