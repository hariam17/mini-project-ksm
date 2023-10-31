require('dotenv').config()
const PORT = process.env.PORT || 4000;
const express = require('express')
const app = express()
const writerRoutes = require('./routes/writers.js')
const publisherRoutes = require('./routes/publishers.js')
const bookRoutes = require('./routes/books.js')
const middlewareLogRequest = require('./middleware/log.js')


app.use(middlewareLogRequest);
app.use(express.json());
app.use('/writers', writerRoutes);
app.use('/publishers', publisherRoutes);
app.use('/books', bookRoutes);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))