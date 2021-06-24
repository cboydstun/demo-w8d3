//initialize express
const express = require('express')
const app = express();

//innitialize middleware
app.use(express.json({extended: false}))

//connect to Mongo DB
const connectDB = require('./config/db.js')
connectDB();

const PORT = 5001;

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, () => {console.log(`Server running on ${PORT}`)})