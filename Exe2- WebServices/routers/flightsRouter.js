const { Router } = require('express');
const { flightsController } = require('../controllers/flightsController');

const flightsRouter = new Router();

module.exports = { flightsRouter };

flightsRouter.get('/', flightsController.getFlights); // localhost:3000/api/flights
flightsRouter.get('/:id', flightsController.getFlight); // localhost:3000/api/flights/6
flightsRouter.post('/', flightsController.addFlight); // localhost:3000/api/flights
flightsRouter.put('/:id', flightsController.updateFlight); // localhost:3000/api/flights/{id}
flightsRouter.delete('/:id', flightsController.deleteFlight); // localhost:3000/api/flights/{id}