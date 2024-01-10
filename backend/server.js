const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorhandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});

