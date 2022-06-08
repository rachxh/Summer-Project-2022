import React from "react";
import { Link } from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa';


const LikeCard = (props) => {

    var gapi = window.gapi
    var CLIENT_ID = "244899854192-vkuvg34746lqksam54c9a0qs2a7mfcs6.apps.googleusercontent.com"
    var API_KEY = "AIzaSyAMcXmDgaVLLe9cCT4kAzPqm-AVs5TTnZo"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  
    const addCalendarEvent = () => {
      gapi.load('client:auth2', () => {
        console.log('loaded client')
  
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
  
        gapi.client.load('calendar', 'v3', () => console.log('bam!'))
  
        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          
          var event = {
            'summary': 'Water the plant!',
            'location': 'Home',
            'description': 'Water the plant',
            'start': {
              'dateTime': 'isoStartDate',
              'timeZone': 'timeZone'
            },
            'end': {
              'dateTime': 'isoEndDate',
              'timeZone': 'timeZone'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'attendees': [
              {'email': 'lpage@example.com'},
              {'email': 'sbrin@example.com'}
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          }
  
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
          })
  
          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })
          

          // get events
          gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
          }).then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
          })
     
      
  
        })
      })
}
  return (

    <div className="card" >
    <Link to={`/myFav/${props.id}`} className="card-link" >
      <img className="plant-img" src={props.img} alt={props.name} />
      <p className="fav-card-name">{props.name}</p>
      </Link>
      <div className="btn-container">
      <button onClick={addCalendarEvent} className="btn-reminder">Set reminder 🗓</button>
      <button className="btn-delete" >
      <FaTrashAlt />
	 </button>
    </div>

    </div>
  );
};

export default LikeCard;
