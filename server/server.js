import express from "express";
import mainRoute from "./routes/mainRoute.js";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js";
import { dbConnect } from "./db/db.js";
import cors from 'cors';


const app = express();
const PORT = 3090;

app.use(cors());
app.use(express.json());

app.use(mainRoute);
app.use(postRoute);
app.use(userRoute);

app.listen(PORT, () => {
    console.log('Server launched successfully at port', PORT);
    dbConnect();
})