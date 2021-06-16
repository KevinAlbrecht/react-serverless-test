import React from 'react';

export default function ({ campains = [], type }) {
  return (
    <div>
      {campains.map((c) => (
        <div key={c.name}>{c.name}</div>
      ))}{' '}
    </div>
  );
}
