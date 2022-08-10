import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(express.json());

//routes
app.use('/api/users', userRoutes)


// connect to the database
const connectDB = async()=>{
    try{
        mongoose.connect(process.env.DB_CONNECTION); 
        console.log('MongoDB Connected...');
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})