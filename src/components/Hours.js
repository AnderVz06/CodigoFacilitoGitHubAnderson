// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
  const today = new Date();
  const day = today.getDay();

  const hours = {
    0: '9 a.m. - 8 p.m.',  // Domingo
    1: '10 a.m. - 4 p.m.', // Lunes
    2: '10 a.m. - 4 p.m.', // Martes
    3: '10 a.m. - 4 p.m.', // Miércoles
    4: '10 a.m. - 4 p.m.', // Jueves
    5: '10 a.m. - 4 p.m.', // Viernes
    6: '9 a.m. - 8 p.m.'   // Sábado
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="hours">
      <h3>Opening Hours</h3>
      <ul>
        {days.map((dayName, index) => (
          <li key={index} style={{ fontWeight: index === day ? 'bold' : 'normal' }}>
            {dayName}: {hours[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hours;


