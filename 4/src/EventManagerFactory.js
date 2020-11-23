import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        let eventsSelected = [];
        let log = (time, data) => console.log(`At second ${time}: ${JSON.stringify(data)}`);
        let eventsData = (events).filter(event => types.indexOf(event.type) !== -1);
        eventsData.forEach((event) => eventsSelected.push(new Event(event, log)));
        return new EventManager(eventsSelected, eventsData);
    }
};