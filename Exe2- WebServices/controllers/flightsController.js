const { flights } = require('../data/data');

exports.flightsController = {
    getFlight(req, res) {
        // res.json("Get a flight");
        const flight = flights.find(rest => rest.id === parseInt(req.params.id));
        if(!flight) {
            res.status(404).send('The flight with the given id was not found');
        }
        res.send(flight);
        // res.json() converts non-objects to json whereas res.send() doesn't
    },

    getFlights(req, res) {
        console.log("Get all flights");
        res.json(flights);
    },  

    addFlight(req, res) {
        // if(!req.body.id) {
        //     res.status(400).send("Id not found");
        //     return;
        // }
        console.log("Add a flight");
        // const { body } = req;
        
        const flight = {
            id: flights.length + 1
            
        };
        flights.push(flight);  //body appears at the end of flights
        res.json(flights);
    },

    updateFlight(req, res) {
         // res.json("Update a flight");
         console.log(req.body);
         if(!req.body) {
             res.status(404).send('Error: body not found');
             return; 
         }
         
         const flight = flights.find(rest => rest.id === parseInt(req.params.id));
 
         if(!flight) {
             res.status(404).send('The flight with the given id was not found');
             return;
         }
     
         //validate
         //* in the video he uses Joi module
 
         //update properties
         flight.stars = req.body.stars;
         console.log(flight);
         
         //return updated flight
         res.send(flight); 
    },

    deleteFlight(req, res) {
        // res.json("Delete a flight");
        //Look up the flight
        const flight = flights.find(rest => rest.id === parseInt(req.params.id));
        if(!flight) {
            res.status(404).send('The flight with the given id was not found');
            return;
        }
        const flightIndex = flights.indexOf(flight);
        flights.splice(flightIndex, 1);   //we go to this index and remove 1 object, splice is also for adding elements to array

        res.send(`flight deleted is flight number ${flight.id}`);
    }
};



   