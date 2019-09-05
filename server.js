var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const options = {
    auth: {
        authdb: 'admin',
        user: 'root',
        password: '123456'
    },
    useNewUrlParser: false,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.connect('mongodb://localhost/tododb', options, mongoError => console.error(mongoError));
mongoose.set('debug', true);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/todoListRoutes');
routes(app); // register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);