require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config view engine
viewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//init web routes
initWebRoutes(app);

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("app is running at the port: " + port);
});