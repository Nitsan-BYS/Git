const express = require('express');
// const morgan = require('morgan');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

const { usersRouter } = require("./routers/usersRouter");
const { flightsRouter } = require("./routers/flightsRouter");

app.use('/api/users', usersRouter);
app.use('/api/flights', flightsRouter);

// app.use(logger('dev'));

app.listen(port, () => 
    console.log(`Listening to server on port ${port}`)
);

app.use((req, res) => {
    res.status(404).send(`Error Occured`);
});