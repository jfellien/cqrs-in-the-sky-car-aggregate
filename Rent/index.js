const uuid = require('uuid/v4');

module.exports = (context, command, history) => {
  // use the history (Event Stream) for business decisions
  
  context.bindings.events = [
    {
      eventName: "car rented",
      carId: command.carId
    },
    {
      eventName: "journey prepared",
      carId: command.carId,
      journeyId: uuid(),
      driverId: command.driverId
    }
  ]

  context.done();
}