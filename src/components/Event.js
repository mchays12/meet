// src/components/Event.js
import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <li className="event" data-testid="event-item">
      <h1 className="summary"> {event.summary} </h1>
      <p className="dateCreated"> {event.created} </p>
      <p className="location"> {event.location} </p>
      <button
        className="details-btn" data-testid="expand-button"
        onClick={(toggleDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="details-section" data-testid="details-section">
          <p className='description'>{event.description}</p>
        </div>)}

    </li>
  );
}

export default Event;