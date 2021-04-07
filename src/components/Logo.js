import React from 'react';

export default function Logo() {
  return (
    <div className="flex justify-center p-2 py-2">
      <p className="text-4xl font-semibold text-cmdgreen">
        <span id="pre"> ~/</span> AdrianBusse.xyz{''}
        <span className="duration-1300 animate-ping" id="underscore">
          _
        </span>
      </p>
    </div>
  );
}
