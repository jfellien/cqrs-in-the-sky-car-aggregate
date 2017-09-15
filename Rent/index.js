const uuid = require('uuid/v4');

module.exports = (context, command, history) => {
  // use the history (Event Stream) for business decisions
  
  const carRented = {
    eventName: "car rented",
    carId: command.carId
  };

  const journeyPrepared = {
    eventName: "journey prepared",
    carId: command.carId,
    journeyId: uuid(),
    driverId: command.driverId
  };

  context.bindings.notifications = [ carRented, journeyPrepared ];
  context.bindings.carRented = carRented;

  context.done();
}