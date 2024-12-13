// CalendarModal.jsx
import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Calendar.css';

function CalendarModal({ isOpen, onClose }) {
  const [token, setToken] = useState(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    summary: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  let tokenClient;

  // Inicializar Google Identity Services
  useEffect(() => {
    if (!isOpen) return; // Solo inicializar si el modal está abierto

    const initializeGIS = () => {
      if (!window.google) return;

      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: '480210626539-frm7djc52r2qpg18bgodje05nmhgvp6i.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar',
        callback: (response) => {
          if (response.error) {
            console.error('Error obteniendo el token:', response.error);
            alert('No se pudo obtener el token de acceso.');
            return;
          }
          setToken(response.access_token);
          listEvents(response.access_token);
        },
      });
    };

    if (window.google) {
      initializeGIS();
    } else {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGIS;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  // Obtener eventos desde el calendario
  const listEvents = async (accessToken) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${new Date().toISOString()}&maxResults=20&singleEvents=true&orderBy=startTime`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      if (data.items) {
        setEvents(data.items);
      } else {
        console.error('Error al obtener los eventos:', data);
        alert('No se pudieron obtener los eventos.');
      }
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
      alert('Hubo un error al obtener los eventos.');
    }
  };

  // Crear un evento
  const createEvent = async () => {
    const { summary, description, startDate, startTime, endDate, endTime } = newEvent;
    const startDateTime = new Date(`${startDate}T${startTime}`).toISOString();
    const endDateTime = new Date(`${endDate}T${endTime}`).toISOString();

    const event = {
      summary,
      description,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'America/Los_Angeles',
      },
    };

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        }
      );

      const data = await response.json();
      if (data.id) {
        setNewEvent({ summary: '', description: '', startDate: '', startTime: '', endDate: '', endTime: '' });
        alert('Evento creado exitosamente');
        listEvents(token);
      } else {
        alert('No se pudo crear el evento.');
      }
    } catch (error) {
      console.error('Error al crear el evento:', error);
      alert('Hubo un error al crear el evento.');
    }
  };

  return (
    <div className={`calendar-modal ${isOpen ? 'open' : ''}`}>
      <GoogleOAuthProvider clientId="480210626539-frm7djc52r2qpg18bgodje05nmhgvp6i.apps.googleusercontent.com">
        <div className="calendar-container">
          <h2>Calendar Unravel</h2>
          {!token ? (
            <GoogleLogin onSuccess={() => tokenClient.requestAccessToken()} onError={() => alert('Login Failed')} />
          ) : (
            <div>
              <h3>Próximos eventos:</h3>
              <div className="events-list">
                {events.length ? (
                  events.map((event, index) => (
                    <div className="event-item" key={index}>
                      <div className="event-date">
                        {new Date(event.start.dateTime || event.start.date).toLocaleDateString()}
                      </div>
                      <div className="event-summary">{event.summary || 'Sin título'}</div>
                    </div>
                  ))
                ) : (
                  <p>No se encontraron eventos próximos.</p>
                )}
              </div>

              <h3>Crear un nuevo evento:</h3>
              <div className="create-event-form">
                <input
                  type="text"
                  placeholder="Resumen"
                  value={newEvent.summary}
                  onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Descripción"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
                <input
                  type="date"
                  value={newEvent.startDate}
                  onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
                />
                <input
                  type="time"
                  value={newEvent.startTime}
                  onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                />
                <input
                  type="date"
                  value={newEvent.endDate}
                  onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                />
                <input
                  type="time"
                  value={newEvent.endTime}
                  onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                />
                <button onClick={createEvent}>Crear Evento</button>
              </div>
            </div>
          )}
          <button className="close-btn" onClick={onClose}>Cerrar</button>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default CalendarModal;
