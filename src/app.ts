import express, { Express } from 'express';
import { readPastries } from "./middleware/data"
import cookieParser from 'cookie-parser';
import router from "./routes/index";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;
const APP_URL = process.env.APP_URL || 'localhost';
const APP_REACT_PORT = process.env.APP_REACT_PORT || '5173';
const APP_REACT_URL = process.env.APP_URL || 'localhost';

import cors from "cors";

const port: any = PORT;
const app: Express = express();

app.use(cors({
  // url app
  origin: `http://${APP_REACT_URL}:${APP_REACT_PORT}`,
  credentials: true
}));

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

// les données
app.use( readPastries  )

// router
app.use(router);

app.listen(port, () =>
  console.log(`listen http://${APP_URL}:${port}`),
);