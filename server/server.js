import express from 'express';
import dotenv from 'dotenv';
import postRoutes from "./routes/postRoutes.route.js";
import fetchRoutes from "./routes/fetchRoutes..route.js";
import deleteRoutes from "./routes/deleter.route.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/api/health', (req, res) => {
  console.log(`[${new Date().toISOString()}] Health check ping received.`);
  res.status(200).json({ status: 'ok', message: 'Server is healthy.' });
});

const PORT = process.env.PORT || 5000;
app.use("/api",postRoutes);
app.use("/api",fetchRoutes);
app.use("/api",deleteRoutes);

app.listen(PORT,()=>{
  connectDB();
});