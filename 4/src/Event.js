export default class Event{
    constructor(event, action) {
        this.event = event;
        this.method = event.type;
        this.action = action;
    }
};