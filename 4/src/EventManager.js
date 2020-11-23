export default class EventManager{

    constructor(events, eventsData) {
        this.events = events;
        this.eventsData = eventsData;
      }
  

      executedEvent(time) {
        let _this = this;
        let eventsMethodSelected = this.eventsData.filter(event => event.second === time);
         if(eventsMethodSelected.length !== 0) {
            eventsMethodSelected.forEach(function(val) {
              let eventSelected = _this.events.find(event => event.method === val.type);
              eventSelected.action(time, eventsMethodSelected);
            })
        }
      }
  
      run() {
        let time = 0;
        let _this = this;
        setInterval(function(){
          _this.executedEvent(time);
          time++;
        }, 1000);
      }
};