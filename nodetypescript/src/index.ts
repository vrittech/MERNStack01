import { connectToDB } from "./config/database";
import app from "./config/express";

const PORT = 8000;

(async function (){
    await connectToDB()
    app.listen(PORT, () => console.log("Server listening at port 8000"));

})()

