require('dotenv').config();

const express = require('express');
const app = express();

const connectToDB = require('./Database/database');
connectToDB();

const authRoutes = require('./Routes/auth-routes');
app.use('/api/auth', authRoutes);

//Middlewares
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})



