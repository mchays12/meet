// src/components/Event.js
import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <li className="event" >
      <h1 className="summary"> {event.summary} </h1>
      <p className="dateCreated"> {event.created} </p>
      <p className="location"> {event.location} </p>
      <button
        className="details-btn"
        onClick={(toggleDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <div className="details">{event.description}</div>}

    </li>
  );
}

export default Event;