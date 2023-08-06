import events from 'bd/events.json';

import { EventsBox, EventsList } from "./Events.styled";

export const Events = () => {
    return (
      <div className='events'>
        <EventsBox className="container">
        <EventsList>
          {events.map((event) => (
            <li key={event.id}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </EventsList>
      </EventsBox>
      </div>
      
    );
  };