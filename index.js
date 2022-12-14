import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));
let objMulter = multer({ dest: "./public/upload" });
app.use(objMulter.any());

import routes from './src/routes/attende.routes.js';
routes(app)

// require("./src/routes/attende.routes.js")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});