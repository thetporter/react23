import express from "express";
import mainRoute from "./routes/mainRoute.js";
import postRoute from "./routes/postRoute.js";
import { dbConnect } from "./db/db.js";

const app = express();
const PORT = 3090;

app.use(mainRoute)
app.use(postRoute)
app.use(express.json())

app.listen(PORT, () => {
    console.log('Server launched successfully at port', PORT);
    dbConnect();
})