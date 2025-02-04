const EventEmitter = require('events');

class EventManagement extends EventEmitter {
    startEvent() {
        console.log("Event Started!");
        this.emit('start');
    }

    inProgressEvent() {
        console.log("Event in Progress...");
        this.emit('in-progress');
    }

    completedEvent() {
        console.log("Event Completed!");
        this.emit('completed');
    }
}

module.exports = EventManagement;
