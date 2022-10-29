class Subject {
  events = [];

  watch(event){
    this.events.push(event);
  }

  unwatch(currentEvent){
    this.events = this.events.filter(event => event !== currentEvent)
  }

  fire(getNewState){
    this.events.forEach(event => {
      event.update(getNewState);
    })
  }
}

class Observer {
  constructor(state){
    this.state = state;
    this.init = state;
  }

  update(getNewState){
    this.state = getNewState();
  }
}

export { Subject, Observer }