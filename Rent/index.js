const uuid = require('uuid/v4');

module.exports = (context, command, history) => {
  // use the history (Event Stream) for business decisions
  
  return [
    {
      eventName: "car rented",
      carId: command.carId
    },
    {
      eventName: "journey prepared",
      journeyId: uuid(),
      carId: command.carId,
      driverId: command.driverId
    }
  ]
}