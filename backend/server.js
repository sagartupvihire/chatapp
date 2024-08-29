import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectTomongodb from './db/connectToMongooseDB.js';

const PORT = process.env.PORT || 5000;

dotenv.config()
const app= express();
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes);
app.use('/api/users',userRoutes);



app.listen(5000 ,() =>{
    connectTomongodb();
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
